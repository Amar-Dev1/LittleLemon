from rest_framework import serializers
from .models import Menu, Booking
# from djoser.serializers import UserCreateSerializer
# from django.contrib.auth import get_user_model


# class CustomUserCreateSerializer(UserCreateSerializer):
#     class Meta:
#         model = get_user_model()
#         fields = ('id', 'username', 'email', 'password')
    
#     def create(self, validated_data):
#         username = validated_data.get("username")
#         if not username:
#             raise serializers.ValidationError({'username': 'This field is required.'})
#         return super().create(validated_data)


class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = "__all__"


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ["name", "email", "mobile", "date", "time", "guests"]

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
