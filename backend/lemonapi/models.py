from django.db import models


# Create your models here.
class Menu(models.Model):
    title = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    description = models.TextField()
    menu_image = models.ImageField(upload_to="menu_images/")

    def __str__(self):
        return self.title


class Booking(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    mobile = models.CharField(max_length=15, unique=True)
    date = models.DateField()
    time = models.TimeField()
    guests = models.IntegerField(max_length=2)

    def __str__(self):
        return self.name
