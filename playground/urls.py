# Neste modulo vamos mapear o URL para as funções do view
from django.urls import path
from . import views

# Url configuration
urlpatterns = [
	# path('hello/', views.say_hello, name="hello"),
	path('appointment/', views.appointment, name="appointment"),
	path('cancel/', views.cancelation, name="cancelation"),
	path('', views.homepage, name="homepage"),
	# path('login/', views.login, name="login")
	# path('validate', views.validate, name="validate")
]
