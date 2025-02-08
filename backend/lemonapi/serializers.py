from rest_framework import serializers
from .models import Menu, Booking


class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = "__all__"


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ["id", "name", "email", "mobile", "date", "time", "guests"]
        read_only_fields = ["user"]

    def validate_guests(self, value):
        if value > 10:
            raise serializers.ValidationError("Guests should be less that 10 person")
        return value

    def validate_time(self, value):
        if Booking.objects.filter(time=value).exists():
            raise serializers.ValidationError(
                "This time is already booked, choose another tiem."
            )
        return value
