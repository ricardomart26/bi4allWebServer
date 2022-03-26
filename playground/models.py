from django.db import models
# from django.forms import ModelForm

# Create your models here.
# class login(models.Model):
# 	name = models.CharField(max_length=200)
# 	password = models.CharField(max_length=15)

	# def __str__(self):
	# 	return self.name + ' ' + password

class appointment(models.Model):
	name = models.CharField(max_length=60)
	email = models.EmailField(max_length=254, default="")
	start = models.DateTimeField()
	finish = models.DateTimeField()
	capacity = models.IntegerField()
	my_manager = models.Manager()

	def __str__(self):
		return self.name
	# room = models.IntegerField(default=1)

