from django.shortcuts import render
from musicapp.models import Song

# from django.db.models import Q
def index(request):
    all_songs = Song.objects.all()
    context = {
        "all_songs": all_songs,
    }
    return render(request, "index.html", context)
