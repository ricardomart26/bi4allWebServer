from django.db import models
from django.forms import ModelForm

# Create your models here.
class login(models.Model):
	name = models.CharField(max_length=200)
	password = models.CharField(max_length=15)

	# def __str__(self):
	# 	return self.name + ' ' + password

class appointment(models.Model):
	sday = models.DateField()
	stime = models.CharField(max_length=4)
	fday = models.DateField()
	ftime = models.CharField(max_length=4)
	capacity = models.IntegerField()

