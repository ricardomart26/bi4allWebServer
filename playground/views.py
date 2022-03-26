# HTTP é um protocolo que funciona atraves de
# respostas e pedidos. A troca de dados envolve
# sempre um pedido e uma resposta 

# Uma view function, é uma função que recebe um pedido e 
# retorna uma resposta


from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .forms import AppointmentForm
from .models import appointment
import datetime

# Create your views here.

# def say_hello(request):
# 	# Pedir dados de uma base de dados
# 	# Transformar dados
# 	# Enviar emails
# 	#return HttpResponse('Hello World'); # Precisamos de mapear para o URL
# 	return render(request, 'hello.html')

rooms = {
	"0" : 5,
	"1" : 3,
	"2" : 3,
	"3" : 6,
	"4" : 2,
	"auditorio" : 20,
	"Reunião" : 10
}


def convert_to_date(strdate, hours):
	return (datetime.datetime.strptime(strdate + '-' + hours , '%Y-%m-%d-%H:%M'))

def validate_capacity(capacity):
	if (capacity == 0 or capacity > 20):
		print("erro")

def validate_times(start_time, finish_time):
	today = datetime.date.today()
	if (int(start_time.hour) > int(finish_time.hour)):
		print("Erro: hora maior no inicio")
	if (int(start_time.hour) == int(finish_time.hour) and
	int(start_time.minute) >= int(finish_time.minute)):
		print("Erro: minutos maiores no inicio")

# def get_better_room(capacity):
# 	print('Get better room')
# 	for cap in rooms.values():
# 		print(index)
# 		print(cap)
# 		if (cap == capacity):
# 			return cap

def check_rooms_left(capacity):
	print(type(appointment))
	print(type(AppointmentForm))
	print(dir(appointment))
	# all_entries = AppointmentForm.objects.all
	# print(all_entries)

def handle_data(request):
	name = request.POST.get("name")
	email = request.POST.get("email")
	our_date = request.POST.get('date')
	start_time = convert_to_date(request.POST.get("Date"), request.POST.get("start_time"))
	finish_time = convert_to_date(request.POST.get("Date"), request.POST.get("end_time"))
	capacity = int(request.POST.get("capacity"))

	check_rooms_left(capacity)
	# rooms_id = get_better_room(capacity)
	validate_times(start_time, finish_time)
	validate_capacity(capacity)
	return AppointmentForm({
		'name' : name,
		'email' : email,
		'start' : start_time,
		'finish' : finish_time,
		'capacity' : capacity,
		# 'room' : 1
	})


def appointment(request):
	if request.method == "POST":
		form = handle_data(request)
		if form.is_valid():
			form.save()
		return (HttpResponseRedirect('../'))
	return render(request, 'appointment.html')

# def login(request):
# 	form = LoginForm()
# 	if request.method == 'POST':
# 		username = request.POST.get("name")
# 		password = request.POST.get("pass")
# 		dict = {
# 			'username' : username,
# 			'password' : password
# 		}
# 		print(f"{username} welcome this is your password: {password}")
# 		return (HttpResponseRedirect('../appointment/'))
# 	return render(request, 'log_in.html')


def cancelation(request):
	return render(request, 'cancel.html')


def homepage(request):
	return render(request, 'index.html')
