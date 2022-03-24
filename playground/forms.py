from django.db import models
from .models import login, appointment
from django.forms import ModelForm

class LoginForm(ModelForm):
	class Meta:
		model = login
		fields = '__all__'


class AppointmentForm(ModelForm):
	class Meta:
		model = appointment
		fields = '__all__'
