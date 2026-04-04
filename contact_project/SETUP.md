# Contact Form Backend Setup - Django

## Project Structure
```
contact_project/
├── manage.py
├── requirements.txt
├── .env.example
├── contact_project/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── email_backend.py
└── contact_app/
    ├── __init__.py
    ├── apps.py
    ├── views.py
    └── urls.py
```

---

## Step 1: Gmail SMTP Setup (App Password)

1. **Enable 2-Factor Authentication on Gmail**
   - Go to Google Account > Security
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to Google Account > Security
   - Search "App Passwords" (or go to https://myaccount.google.com/apppasswords)
   - Select "Mail" as the app
   - Select "Other (Custom name)" and enter "Django Contact Form"
   - Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)

3. **Important**: Use the App Password (16 chars) in your `.env` file, NOT your regular Gmail password.

---

## Step 2: Environment Setup

1. **Create `.env` file from `.env.example`**
   ```bash
   cd contact_project
   copy .env.example .env
   ```

2. **Edit `.env` with your settings**
   ```
   DJANGO_SECRET_KEY=your-secret-key-here
   DEBUG=True
   
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_HOST_USER=your-email@gmail.com
   EMAIL_HOST_PASSWORD=your-16-char-app-password
   EMAIL_USE_TLS=True
   
   CONTACT_FORM_RECIPIENT=dimpalpojaryckc@gmail.com
   ```

---

## Step 3: Install Dependencies

```bash
cd contact_project
pip install -r requirements.txt
```

---

## Step 4: Run Migrations

```bash
python manage.py migrate
```

---

## Step 5: Start Django Server

```bash
python manage.py runserver
```

The server will run at `http://localhost:8000`

---

## Step 6: Test the Contact Form

1. Open your portfolio website (`index.html` or via local server)
2. Fill in the contact form (Name, Email, Subject, Message)
3. Click "Send Message"
4. Check your Gmail inbox for the message

---

## Troubleshooting

### Error: "SMTPAuthenticationError"
- Verify App Password is correct
- Make sure 2-Factor Authentication is enabled on Gmail

### Error: "Connection refused"
- Check EMAIL_PORT (should be 587 for TLS)
- Make sure no firewall is blocking the connection

### Error: "Timeout"
- Check internet connection
- Try different EMAIL_PORT (465 for SSL)

---

## For Production Deployment

1. Set `DEBUG=False` in `.env`
2. Update `ALLOWED_HOSTS` in settings.py with your domain
3. Use a production WSGI server (gunicorn)
4. Configure proper email settings for your email provider
