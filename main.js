// script.js// Assuming currentDate is defined somewhere before this code snippet
const currentDate = new Date();

// Options for time formatting
const options = { hour12: true, hour: 'numeric', minute: 'numeric' };

// Update time element with current time in Nigeria
document.querySelector('[data-testid="currentTimeUTC"]').textContent = currentDate.toLocaleTimeString('en-NG', options);

// Update day element with current day in Nigeria
document.querySelector('[data-testid="currentDay"]').textContent = currentDate.toLocaleDateString('en-NG', { weekday: 'long' });

document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('fade-in');
});
