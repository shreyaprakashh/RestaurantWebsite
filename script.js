// JavaScript for form submission
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = document.getElementById('submitBtn');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate name
    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        nameInput.focus();
        return false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return false;
    }

    // Validate message
    if (messageInput.value.trim() === '') {
        alert('Please enter a message.');
        messageInput.focus();
        return false;
    }

    // Form is valid, you can submit the form or perform other actions here
    // For now, we'll just show an alert
    alert('Form submitted successfully!');
    // Optionally, you can reset the form fields after submission
    form.reset();
});

