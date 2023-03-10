from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.contrib.staticfiles.urls import static
from . import views


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", views.index, name="index"),
    path("search/", views.search, name="search"),
    path("about/", views.about, name="about"),
    path("player/", include("musicapp.urls")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
