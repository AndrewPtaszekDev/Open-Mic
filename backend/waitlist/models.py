from django.db import models


# Create your models here
class WaitlistModel(models.Model):
    name = models.CharField(max_length=30)
    song = models.CharField(max_length=50)
    order = models.PositiveIntegerField(default=1, editable=False)

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        # If it's a new instance (doesn't have an id yet)
        if self._state.adding:
            # Get the current maximum order value, increment by 1
            last_order = WaitlistModel.objects.all().aggregate(models.Max('order'))['order__max']
            if last_order is None:
                last_order = 0
            self.order = last_order + 1
        super().save(*args, **kwargs)
    