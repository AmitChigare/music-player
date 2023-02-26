from django.shortcuts import render
from musicapp.models import Song
from django.db.models import Q


def index(request):
    all_songs = Song.objects.all()
    context = {
        "all_songs": all_songs,
    }
    return render(request, "index.html", context)


def search(request):
    all_songs = Song.objects.all()
    keyword = ""
    if "keyword" in request.GET:
        keyword = request.GET["keyword"]
        if keyword:
            all_songs = Song.objects.filter(
                Q(title__icontains=keyword)
                | Q(artist__icontains=keyword)
                | Q(album__icontains=keyword)
            )
    context = {
        "all_songs": all_songs,
        "keyword": keyword,
    }
    return render(request, "index.html", context)
