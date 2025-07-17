// register.js – Simulate account registration

const registerForm = document.getElementById('registerForm');

if (registerForm) {
  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Account registered successfully! You can now log in.');
    registerForm.reset();
    window.location.href = 'login.html';
  });
}
