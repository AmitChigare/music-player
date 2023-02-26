from django.db import models

# Create your models here.
class Song(models.Model):
    title = models.TextField()
    artist = models.TextField()
    album = models.CharField(max_length=100)
    image = models.ImageField(upload_to="images/")
    audio_file = models.FileField(blank=True, null=True, upload_to="songs/")

    def __str__(self):
        return self.title
