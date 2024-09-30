from django.db import models


# Create your models here.
class WaitlistModel(models.Model):
    name = models.CharField(max_length=30)
    song = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    