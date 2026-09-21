const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;

        element.classList.toggle('visible', isInView);
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav a');

const closeNav = () => {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Abrir menú');
};

navToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

navLinks.forEach((link) => {
    link.addEventListener('click', closeNav);
});

document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) {
        closeNav();
    }
});
