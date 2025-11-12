// Hero button alert
function showMessage() {
    alert("Hello! Thanks for visiting.");
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const response = document.getElementById('formResponse');
    response.textContent = Thank you, ${name}! Your message has been received.;
    this.reset();
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});