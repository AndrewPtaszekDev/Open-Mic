from django.db import models, transaction


# Create your models here
class WaitlistModel(models.Model):
    name = models.CharField(max_length=30)
    song = models.CharField(max_length=50)
    order = models.PositiveIntegerField(default=1, editable=False)

    def __str__(self):
        return self.name
    
    def save(self, *args, custom_order=None, **kwargs):

        if custom_order is not None:
            self.order = custom_order

        # If it's a new instance 
        elif self._state.adding:
            # Get the current maximum order value, increment by 1
            last_order = WaitlistModel.objects.all().aggregate(models.Max('order'))['order__max']
            if last_order is None:
                last_order = 0
            self.order = last_order + 1
        super().save(*args, **kwargs)
    
    @classmethod
    def increment_orders_from(cls, threshold):
        # Increment the order of all entries from the given threshold to highest order value
        with transaction.atomic(): # If one fails, it all fails
            cls.objects.filter(order__gte=threshold).update(order=models.F('order') + 1)