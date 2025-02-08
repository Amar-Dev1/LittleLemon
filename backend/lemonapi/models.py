from django.db import models
from django.contrib.auth.models import User
from uuid import uuid4
# Create your models here.
class Menu(models.Model):
    title = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    description = models.TextField()
    menu_image = models.ImageField(upload_to="menu_images/")

    def __str__(self):
        return self.title


class Booking(models.Model):
    id = models.UUIDField(primary_key=True,default=uuid4,editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    mobile = models.CharField(max_length=15, unique=True)
    date = models.DateField()
    time = models.TimeField()
    guests = models.IntegerField()

    def __str__(self):
        return self.name
