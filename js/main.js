// Baker & Co LLC - Main JavaScript

// ===== MOBILE MENU TOGGLE =====
document.addEventListener('DOMContentLoaded', () => {
    // Create hamburger menu button if it doesn't exist
    const navContainer = document.querySelector('.nav-container');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navContainer && navMenu) {
        // Create hamburger button
        const hamburger = document.createElement('div');
        hamburger.classList.add('nav-toggle');
        hamburger.innerHTML = `MENU`;
        
        // Insert hamburger before nav-phone
        const navPhone = document.querySelector('.nav-phone');
        if (navPhone) {
            navPhone.parentNode.insertBefore(hamburger, navPhone);
        } else {
            navContainer.appendChild(hamburger);
        }
        
        // Toggle menu on click
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.slide-in-left, .slide-in-right, .fade-in');
    animatedElements.forEach(el => observer.observe(el));
});