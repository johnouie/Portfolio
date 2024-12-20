// Smooth Scrolling for Navigation
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Sticky Navigation Bar
const navBar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navBar.classList.add('sticky');
    } else {
        navBar.classList.remove('sticky');
    }
});

// Contact Form Validation
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const message = document.getElementById('message').value.trim();

        if (!name) {
            alert('Please enter your name.');
            return;
        }

        if (!email || !emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!message) {
            alert('Please enter your message.');
            return;
        }

        alert('Message sent successfully!');
        form.reset();
    });
});