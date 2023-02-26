from django.urls import path
from . import views

urlpatterns = [
    path("", views.player, name="player"),
    path("add/", views.add, name="add"),
    path("delete/<int:songId>/", views.delete, name="delete"),
]
