from django.core.mail.backends.smtp import EmailBackend
import os

class CustomEmailBackend(EmailBackend):
    def __init__(self, *args, **kwargs):
        host = os.environ.get('EMAIL_HOST', 'smtp.gmail.com')
        port = int(os.environ.get('EMAIL_PORT', '587'))
        username = os.environ.get('EMAIL_HOST_USER')
        password = os.environ.get('EMAIL_HOST_PASSWORD')
        use_tls = os.environ.get('EMAIL_USE_TLS', 'True') == 'True'
        
        super().__init__(host=host, port=port, username=username, password=password, use_tls=use_tls, *args, **kwargs)
