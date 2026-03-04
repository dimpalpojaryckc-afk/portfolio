# Dimpal - Python Full Stack Developer Portfolio

A modern, professional, and ATS-friendly personal portfolio website built with HTML, CSS, and JavaScript.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Tech Stack](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JavaScript-orange)

## 📋 Table of Contents

- [About This Portfolio](#about-this-portfolio)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Customization](#customization)
- [Sections Overview](#sections-overview)
- [Contact Information](#contact-information)
- [License](#license)

## 🎯 About This Portfolio

This is a personal portfolio website for **Dimpal**, a Python Full Stack Developer. The portfolio showcases her skills, projects, experience, and education in a clean, professional manner suitable for job applications and professional networking.

### Key Highlights
- **ATS-Friendly**: Structured content that's easily readable by applicant tracking systems
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean design with smooth animations and hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML for search engines

## ✨ Features

1. **Hero Section**
   - Professional introduction with name and title
   - Call-to-action buttons for projects and contact
   - Social media links (GitHub, Email, Phone)

2. **About Me**
   - Professional summary
   - Career objective
   - Key strengths

3. **Skills Section**
   - Technical Skills: Python, Flask, HTML, CSS, JavaScript, SQLite, UI/UX Design, Database Management
   - Soft Skills: Communication, Time Management, Empathy, Active Listening, Interpersonal Skills

4. **Projects**
   - Payroll Management System
   - Garden Gallery (Online Plant Selling System)

5. **Experience**
   - UiPath RPA Developer (Virtual Internship)
   - Tele Support at G-Tec Computer Education
   - Academic Counsellor Intern at MicroDegree Education

6. **Education**
   - MCA - Srinivas Institute of Technology (8 CGPA)
   - BCA - Srinivas University (9 CGPA)

7. **Certifications**
   - Fullstack Developer - G-Tec Computer Education
   - Power BI Workshop

8. **Achievements**
   - Front-End Developer
   - Back-End Developer
   - Database Management
   - UI/UX Development & Design

9. **Contact Section**
   - Contact form
   - Direct contact information
   - GitHub link

## 📂 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Custom styles
├── js/
│   └── script.js       # JavaScript functionality
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, Notepad++)

### Local Development

1. **Clone or Download the Repository**
   ```bash
   # If using git
   git clone https://github.com/dimpalpojaryckc-afk/portfolio.git
   
   # Or download as ZIP and extract
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd portfolio
   ```

3. **Open in Browser**
   - Double-click `index.html` to open in your default browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if installed)
     npx serve
     ```

4. **View the Website**
   - Open `http://localhost:8000` in your browser

## 🌐 Deployment

### Option 1: GitHub Pages (Free)

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com)
   - Create a new repository (e.g., `portfolio`)

2. **Upload Files**
   - Upload `index.html`, `css/styles.css`, and `js/script.js`

3. **Enable GitHub Pages**
   - Go to Repository Settings
   - Navigate to Pages section
   - Select main branch as source
   - Save and wait for deployment

4. **Your site will be live at:**
   `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)

1. **Create Netlify Account**
   - Go to [Netlify](https://www.netlify.com)
   - Sign up with GitHub

2. **Deploy**
   - Drag and drop your project folder to Netlify dashboard
   - Or connect to GitHub repository

3. **Your site will be live at:**
   Your custom Netlify subdomain

### Option 3: Vercel (Free)

1. **Create Vercel Account**
   - Go to [Vercel](https://vercel.com)
   - Sign up with GitHub

2. **Deploy**
   - Import your GitHub repository
   - Vercel will automatically detect the project type

3. **Your site will be live at:**
   Your custom Vercel subdomain

## 🎨 Customization

### Change Personal Information

Edit `index.html` to update:
- Name and title
- Contact information
- Project details
- Experience and education

### Change Colors

Edit `css/styles.css` and modify CSS variables:
```css
:root {
    --primary-color: #2563eb;    /* Change main color */
    --secondary-color: #1e40af;  /* Change secondary color */
    --accent-color: #3b82f6;     /* Change accent color */
    --dark-color: #1e293b;       /* Change dark text color */
    --light-color: #f8fafc;      /* Change light background */
}
```

### Add More Projects

In `index.html`, add new project cards:
```html
<div class="project-card">
    <div class="project-icon">
        <i class="fas fa-your-icon"></i>
    </div>
    <h3>Your Project Name</h3>
    <p class="project-description">Description</p>
    <div class="project-tech">
        <span>Tech 1</span>
        <span>Tech 2</span>
    </div>
    <ul class="project-features">
        <li><i class="fas fa-check"></i> Feature 1</li>
    </ul>
</div>
```

### Add More Skills

In `index.html`, add skill items:
```html
<div class="skill-item">
    <i class="fab fa-your-icon"></i>
    <span>Skill Name</span>
</div>
```

## 📱 Sections Overview

| Section | Description |
|---------|-------------|
| Hero | First impression with name, title, and CTAs |
| About | Professional summary and career objective |
| Skills | Technical and soft skills with icons |
| Projects | Showcase of completed projects |
| Experience | Work history and internships |
| Education | Academic background |
| Certifications | Professional certifications |
| Achievements | Key accomplishments |
| Contact | Contact form and information |

## 📞 Contact Information

- **Name**: Dimpal
- **Email**: dimpalpojaryckc@gmail.com
- **Phone**: +91 9113801571
- **GitHub**: https://github.com/dimpalpojaryckc-afk

## 📄 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio. If you find any issues or have suggestions, please open an issue or submit a pull request.

## 🙏 Acknowledgments

- [Font Awesome](https://fontawesome.com) for icons
- [Google Fonts](https://fonts.google.com) for typography
- [Unsplash](https://unsplash.com) for placeholder images (if used)

---

**Note**: This portfolio is designed to be lightweight, fast-loading, and easily customizable. No build tools or frameworks required - just pure HTML, CSS, and JavaScript!

---

*Built with ❤️ by Dimpal*
