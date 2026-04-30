const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Language Switcher
function switchLanguage(lang) {
    console.log('Switching to language:', lang);
    alert(`Cambiando idioma a: ${lang.toUpperCase()}`);
}

// Volunteer Form Handler
function openVolunteerForm(ministry) {
    alert(`¡Gracias por tu interés en servir en ${ministry}! En una implementación real, esto abriría un formulario de registro de voluntarios.`);
}

// Smooth Scrolling for Anchor Links
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

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .card-elevated, .card-gold').forEach(el => {
    observer.observe(el);
});