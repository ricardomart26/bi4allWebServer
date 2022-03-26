# Generated by Django 4.0.3 on 2022-03-25 13:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('playground', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='appointment',
            old_name='fday',
            new_name='finish',
        ),
        migrations.RenameField(
            model_name='appointment',
            old_name='sday',
            new_name='start',
        ),
        migrations.RemoveField(
            model_name='appointment',
            name='ftime',
        ),
        migrations.RemoveField(
            model_name='appointment',
            name='stime',
        ),
        migrations.AddField(
            model_name='appointment',
            name='email',
            field=models.EmailField(default='', max_length=254),
        ),
    ]