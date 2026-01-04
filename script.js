// Language Toggle Functionality
let currentLanguage = 'en';

function updateLanguage(lang) {
    currentLanguage = lang;
    
    // Update all elements with data-en and data-es attributes
    const elements = document.querySelectorAll('[data-en], [data-es]');
    elements.forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            // Check if it's an input placeholder
            if (element.hasAttribute(`data-${lang}-placeholder`)) {
                element.placeholder = element.getAttribute(`data-${lang}-placeholder`);
            } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                // Don't change input values, only placeholders
            } else {
                // For regular elements, update text or innerHTML if it contains HTML
                if (text.includes('<br>')) {
                    element.innerHTML = text;
                } else {
                    element.textContent = text;
                }
            }
        }
    });
    
    // Update select options
    const selectOptions = document.querySelectorAll('option[data-en], option[data-es]');
    selectOptions.forEach(option => {
        const text = option.getAttribute(`data-${lang}`);
        if (text) {
            option.textContent = text;
        }
    });
    
    // Update language toggle active state
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Language Toggle Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('languageToggle');
    const langOptions = document.querySelectorAll('.lang-option');
    
    langOptions.forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    const icon = this.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Navbar height
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Portfolio Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-style');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all') {
                item.classList.remove('hidden');
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                if (item.getAttribute('data-style') === filterValue) {
                    item.classList.remove('hidden');
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.classList.add('hidden');
                    }, 300);
                }
            }
        });
    });
});

// Form Submission Handlers
const bookingForm = document.getElementById('bookingForm');
const contactForm = document.getElementById('contactForm');

function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            successDiv.remove();
        }, 500);
    }, 3000);
}

// Add slideOutRight animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

bookingForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitButton = this.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    submitButton.textContent = currentLanguage === 'en' ? 'Sending...' : 'Enviando...';
    submitButton.disabled = true;
    
    const formData = new FormData(this);
    
    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
            const successMessage = currentLanguage === 'en' 
                ? '✅ Booking request submitted successfully! We\'ll contact you soon.' 
                : '✅ ¡Solicitud de reserva enviada con éxito! Te contactaremos pronto.';
            showSuccessMessage(successMessage);
            this.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        const errorMessage = currentLanguage === 'en' 
            ? '❌ Error sending booking. Please try again or call us directly.' 
            : '❌ Error al enviar la reserva. Inténtalo de nuevo o llámanos.';
        showSuccessMessage(errorMessage);
    } finally {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
});

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitButton = this.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    submitButton.textContent = currentLanguage === 'en' ? 'Sending...' : 'Enviando...';
    submitButton.disabled = true;
    
    const formData = new FormData(this);
    
    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
            const successMessage = currentLanguage === 'en' 
                ? '✅ Message sent successfully! We\'ll get back to you soon.' 
                : '✅ ¡Mensaje enviado con éxito! Te responderemos pronto.';
            showSuccessMessage(successMessage);
            this.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        const errorMessage = currentLanguage === 'en' 
            ? '❌ Error sending message. Please try again or call us directly.' 
            : '❌ Error al enviar el mensaje. Inténtalo de nuevo o llámanos.';
        showSuccessMessage(errorMessage);
    } finally {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
});

// Newsletter Form Handler
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        
        // Simulate subscription
        console.log('Newsletter subscription:', email);
        
        const successMessage = currentLanguage === 'en' 
            ? 'Successfully subscribed to newsletter!' 
            : '¡Suscrito al boletín con éxito!';
        showSuccessMessage(successMessage);
        
        this.reset();
    });
}

// Navbar Background on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s ease';
    observer.observe(section);
});

// Set minimum date for booking form to today
document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.querySelector('input[type="date"]');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
});

// Add portfolio item animations on load
window.addEventListener('load', function() {
    portfolioItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
        }, index * 100);
    });
});





