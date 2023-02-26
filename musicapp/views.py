from django.shortcuts import render, redirect
from .models import Song

# Create your views here.
def player(request):
    all_songs = Song.objects.all()
    context = {
        "all_songs": all_songs,
    }
    return render(request, "player.html", context)


def add(request):
    if request.method == "POST":
        title = request.POST["title"]
        artist = request.POST["artist"]
        album = request.POST["album"]
        image = request.FILES["image"]
        audio_file = request.FILES["audio_file"]

        song = Song(
            title=title, artist=artist, album=album, image=image, audio_file=audio_file
        )
        song.save()
        return redirect("player")
    return render(request, "add.html")


def delete(request, songId):
    song = Song.objects.get(id=songId)
    song.delete()
    return redirect("player")
