# from django.db import models
from .models import appointment
from django.forms import ModelForm
# from django import forms
# class LoginForm(ModelForm):
# 	class Meta:
# 		model = login
# 		fields = '__all__'


# class AppointmentForm(forms.Form):
# 	name = forms.CharField(Label="Name", max_length="60")
# 	sday = models.DateField()
# 	stime = models.CharField(max_length=6)
# 	fday = models.DateField()
# 	ftime = models.CharField(max_length=6)
# 	capacity = models.IntegerField()

class AppointmentForm(ModelForm):
	class Meta:
		model = appointment
		app_label = "playground"
		fields = '__all__'
