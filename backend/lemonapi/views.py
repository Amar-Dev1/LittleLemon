from rest_framework import viewsets, generics
from rest_framework.decorators import permission_classes
from .models import Menu, Booking
from .serializers import MenuItemSerializer, BookingSerializer
from rest_framework import permissions


class MenuItemView(generics.ListCreateAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuItemSerializer
    permission_classes = [permissions.IsAdminUser]

    def get_permissions(self):
        if self.request.method == "POST":
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]


class SingleMenuItemView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuItemSerializer
    permission_classes = [permissions.IsAdminUser]


class BookingView(viewsets.ModelViewSet):
    serializer_class = BookingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_superuser or self.request.user.is_staff:
            queryset = Booking.objects.all()
        else:
            queryset = Booking.objects.filter(user=self.request.user)
        return queryset
