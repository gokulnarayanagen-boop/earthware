// Nav background change on scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 8, 16, 0.9)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        navbar.style.backdropFilter = 'blur(16px)';
    } else {
        navbar.style.background = 'rgba(5, 8, 16, 0.6)';
        navbar.style.boxShadow = 'none';
        navbar.style.backdropFilter = 'blur(12px)';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for fixed nav
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations (fade-in)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-up class to elements dynamically and observe
document.querySelectorAll('.card, .section-title, .contact-box').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
});

// Hero animations stagger implementation
document.addEventListener('DOMContentLoaded', () => {
    const heroElements = document.querySelectorAll('.stagger-anim');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 200 + (index * 150));
    });
});
