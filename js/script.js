window.onload = function(){
    // Menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Create floating particles
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random properties
    const size = Math.random() * 30 + 10;
    const posX = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = Math.random() * 10 + 10;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    
    particlesContainer.appendChild(particle);
}

// Add scroll reveal animation
const featureCards = document.querySelectorAll('.feature-card');
const articles = document.querySelectorAll('.article');
const imageCards = document.querySelectorAll('.image-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

featureCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

articles.forEach(article => {
    article.style.opacity = 0;
    article.style.transform = 'translateY(50px)';
    article.style.transition = 'all 0.6s ease-out';
    observer.observe(article);
});

imageCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Theme switcher functionality
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Set initial theme based on system preference
if (prefersDarkScheme.matches) {
    document.body.classList.add('dark-theme');
    themeToggle.checked = true;
} else {
    document.body.classList.remove('dark-theme');
    themeToggle.checked = false;
}

// Toggle theme when switch is clicked
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
});
}