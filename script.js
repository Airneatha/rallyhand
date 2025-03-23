const scrollToTop = document.querySelector('.scroll-to-top');
const heroButton = document.querySelector('.Rally');

console.log("heroButton:", heroButton); // Check the value of heroButton

if (scrollToTop && heroButton) {
    scrollToTop.addEventListener('click', () => {
        heroButton.scrollIntoView({ behavior: 'smooth' });
    });
}

const rallyButton = document.querySelector('.Rally');
const popup = document.getElementById('signupPopup');
const closeButton = document.querySelector('.close-popup');
const signupForm = document.getElementById('signupForm'); // Add form selection

rallyButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

// Simulated backend work
signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const nameInput = signupForm.querySelector('input[type="text"]');
    const emailInput = signupForm.querySelector('input[type="email"]');

    const name = nameInput.value.trim(); // Trim whitespace
    const email = emailInput.value.trim();

    // Simulate server-side validation
    if (!name) {
        alert('Please enter your name.');
        return;
    }

    if (!email) {
        alert('Please enter your email.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate successful server response
    console.log('Form data:', { name, email }); // Log data to console
    alert('Signup successful (demo)!');

    // Reset form and close popup
    signupForm.reset();
    popup.style.display = 'none';

    // Simulated backend actions:
    /*
    1. Send data to a server-side script using fetch or XMLHttpRequest.
    2. Store data in a database.
    3. Send a confirmation email.
    */
});

// Helper function for email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

