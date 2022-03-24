# HTTP é um protocolo que funciona atraves de
# respostas e pedidos. A troca de dados envolve
# sempre um pedido e uma resposta 

# Uma view function, é uma função que recebe um pedido e 
# retorna uma resposta


from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .forms import LoginForm, AppointmentForm
import datetime
# Create your views here.

def say_hello(request):
	# Pedir dados de uma base de dados
	# Transformar dados
	# Enviar emails
	#return HttpResponse('Hello World'); # Precisamos de mapear para o URL
	return render(request, 'hello.html')


def convert_to_date(strdate, hours):
	return (datetime.datetime.strptime(strdate + '-' + hours , '%Y-%m-%d-%H:%M'))

def appointment(request):
	if request.method == "POST":
		today = datetime.date.today()
		start_time = convert_to_date(request.POST.get("sday"), request.POST.get("stime"))
		finish_time = convert_to_date(request.POST.get("fday"), request.POST.get("ftime"))
		capacity = request.POST.get("capacity")
		dict = {
			'stime' : start_time,
			'ftime' : finish_time,
			'capacity' : capacity
		}
		return (HttpResponseRedirect('../'))
	return render(request, 'appointment.html')

def login(request):
	form = LoginForm()
	if request.method == 'POST':
		username = request.POST.get("name")
		password = request.POST.get("pass")
		dict = {
			'username' : username,
			'password' : password
		}
		print(f"{username} welcome this is your password: {password}")
		return (HttpResponseRedirect('../appointment/'))
	return render(request, 'log_in.html')


def cancelation(request):
	return render(request, 'cancelation.html')


def homepage(request):
	return render(request, 'index.html')
