// contact.js – Handles contact form submission

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you shortly.');
    contactForm.reset();
  });
}
