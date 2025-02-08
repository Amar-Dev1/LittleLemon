from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r"booking", views.BookingView, basename="booking")

urlpatterns = [
    path("menu-items", views.MenuItemView.as_view()),
    path("menu-items/<int:pk>", views.SingleMenuItemView.as_view()),
    path("", include(router.urls)),
]
