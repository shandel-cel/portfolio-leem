// EmailJS integration for contact form
// Replace the placeholders with your actual EmailJS credentials

// Initialize EmailJS
(function() {
  emailjs.init('QF0MOZngGzxnNGD0K'); // <-- Replace with your EmailJS user ID
})();

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Optionally, show a loading spinner or disable the button here
    emailjs.sendForm('service_tyootpf', 'template_qr3x84j', this) // <-- Replace with your EmailJS service and template IDs
      .then(function(response) {
        alert('Message sent successfully!');
        form.reset();
      }, function(error) {
        alert('Failed to send message. Please try again later.');
      });
  });
});
