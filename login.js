// login.js – Handles login form submission

const loginForm = document.getElementById('loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Login successful! Redirecting to dashboard...');
    // You can redirect or store data in localStorage here
    window.location.href = 'index.html';
  });
}
