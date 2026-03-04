// ========================================
// Portfolio Website - Dimpal
// JavaScript Functionality with Animations
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all functionality
    initAOS();
    initTypingAnimation();
    initNavbar();
    initSmoothScroll();
    initMobileMenu();
    initContactForm();
    initScrollAnimations();
    initActiveNavLink();
    initResumeDownload();
});

// ========================================
// AOS Animation Initialization
// ========================================
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
            delay: 0
        });
    }
}

// ========================================
// Typing Animation
// ========================================
function initTypingAnimation() {
    const typedTextElement = document.querySelector('.typed-text');
    
    if (typedTextElement) {
        const textToType = 'Python Full Stack Developer';
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function type() {
            if (isDeleting) {
                typedTextElement.textContent = textToType.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typedTextElement.textContent = textToType.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }
            
            if (!isDeleting && charIndex === textToType.length) {
                isDeleting = true;
                typingSpeed = 2000; // Pause at end
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                typingSpeed = 500; // Pause before typing again
            }
            
            setTimeout(type, typingSpeed);
        }
        
        // Start typing after a short delay
        setTimeout(type, 1000);
    }
}

// ========================================
// Resume Download Tracking
// ========================================
function initResumeDownload() {
    const resumeLinks = document.querySelectorAll('.btn-resume');
    
    resumeLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Show success notification
            showAlert('Resume download started!', 'success');
            
            // Log download (for analytics - can be customized)
            console.log('Resume download initiated at:', new Date().toISOString());
            
            // Track with localStorage (for simple analytics)
            trackResumeDownload();
        });
    });
}

function trackResumeDownload() {
    // Get existing download count
    let downloadCount = localStorage.getItem('resumeDownloadCount');
    
    // Increment count
    downloadCount = downloadCount ? parseInt(downloadCount) + 1 : 1;
    
    // Save to localStorage
    localStorage.setItem('resumeDownloadCount', downloadCount);
    localStorage.setItem('lastResumeDownload', new Date().toISOString());
    
    console.log('Resume downloaded', downloadCount, 'times');
}

// ========================================
// Navbar Scroll Effect
// ========================================
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '15px 0';
        }
    });
}

// ========================================
// Smooth Scroll for Navigation Links
// ========================================
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-links a, .hero-content .cta-buttons a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ========================================
// Mobile Menu Toggle
// ========================================
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
}

// ========================================
// Contact Form Handling
// ========================================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Create mailto link with form data
            const mailtoLink = `mailto:dimpalpojaryckc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            showAlert('Message prepared! Your email client will open to send the message.', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }
}

// ========================================
// Scroll Animations
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Elements to animate
    const animatedElements = document.querySelectorAll(
        '.project-card, .timeline-item, .education-card, .certification-card, .achievement-item, .skill-item'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add visible class styles
    const style = document.createElement('style');
    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// ========================================
// Active Navigation Link on Scroll
// ========================================
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            
            if (scrollY >= sectionTop - navbarHeight - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ========================================
// Alert/Notification System
// ========================================
function showAlert(message, type = 'info') {
    // Remove existing alerts
    const existingAlert = document.querySelector('.custom-alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `custom-alert alert-${type}`;
    alert.innerHTML = `
        <span>${message}</span>
        <button class="alert-close">&times;</button>
    `;
    
    // Add styles
    alert.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 15px;
        animation: slideIn 0.3s ease;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    `;
    
    // Set background color based on type
    if (type === 'success') {
        alert.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    } else if (type === 'error') {
        alert.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
    } else {
        alert.style.background = 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)';
    }
    
    // Add animation keyframes
    const keyframes = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = keyframes;
    document.head.appendChild(styleSheet);
    
    // Add close button functionality
    const closeBtn = alert.querySelector('.alert-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    
    closeBtn.addEventListener('click', () => {
        alert.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => alert.remove(), 300);
    });
    
    // Add slide out animation
    const slideOutStyle = document.createElement('style');
    slideOutStyle.textContent = `
        @keyframes slideOut {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100px);
            }
        }
    `;
    document.head.appendChild(slideOutStyle);
    
    document.body.appendChild(alert);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alert.parentNode) {
            alert.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => alert.remove(), 300);
        }
    }, 5000);
}

// ========================================
// Parallax Effect (Optional Enhancement)
// ========================================
function initParallax() {
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
        });
    }
}

// ========================================
// Skill Items Hover Sound (Optional)
// ========================================
function addSkillHoverEffect() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });
}

// ========================================
// Initialize Additional Features
// ========================================
addSkillHoverEffect();
