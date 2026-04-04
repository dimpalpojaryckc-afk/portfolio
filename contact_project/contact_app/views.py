from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import os

@csrf_exempt
@require_http_methods(["POST"])
def contact_view(request):
    try:
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        
        if not all([name, email, subject, message]):
            return JsonResponse({'status': 'error', 'message': 'All fields are required'}, status=400)
        
        if '@' not in email or '.' not in email:
            return JsonResponse({'status': 'error', 'message': 'Invalid email format'}, status=400)
        
        recipient_email = os.environ.get('CONTACT_FORM_RECIPIENT', 'dimpalpojaryckc@gmail.com')
        
        email_subject = f"Portfolio Contact: {subject}"
        email_message = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
        
        send_mail(
            email_subject,
            email_message,
            email,
            [recipient_email],
            fail_silently=False,
        )
        
        return JsonResponse({'status': 'success', 'message': 'Message sent successfully!'})
        
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=500)
