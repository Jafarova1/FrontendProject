document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('subscription-form');
    const emailInput = document.getElementById('email');
    const message = document.getElementById('message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = emailInput.value;

        // Simulate subscription success
        setTimeout(function () {
            message.textContent = `Subscribed successfully: ${email}`;
            message.style.color = 'green';
        }, 1000);

        // Clear input after subscription
        emailInput.value = '';
    });
});