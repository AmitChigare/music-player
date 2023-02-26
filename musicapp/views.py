from django.shortcuts import render
from .models import Song

# Create your views here.
def player(request):
    all_songs = Song.objects.all()
    context = {
        "all_songs": all_songs,
    }
    return render(request, "player.html", context)
