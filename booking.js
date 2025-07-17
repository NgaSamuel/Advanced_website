// booking.js – Handles booking form submission

const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Booking submitted successfully! We will contact you shortly.');
    bookingForm.reset();
  });
}
