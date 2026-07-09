// --- 1. User Personalization (The Alert Box) ---
// We use a prompt to get data from the user and store it in a variable
const userName = prompt("Welcome! What is your name?");

// We find the element where we want to put the name
const nameDisplay = document.getElementById('user-name');

// If the user actually entered a name, we display it; otherwise, we use "Guest"
if (userName) {
    nameDisplay.innerText = userName;
} else {
    nameDisplay.innerText = "Guest";
}


// --- 2. Dynamic Greeting Logic ---
const greetingElement = document.getElementById('greeting-text');
const hour = new Date().getHours();
let greeting;

if (hour < 12) {
    greeting = "Good Morning";
} else if (hour < 18) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}

greetingElement.innerText = greeting;


// --- 3. Dark Mode Toggle Logic ---
const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', () => {
    // This flips the 'dark-theme' class on and off on the body tag
    document.body.classList.toggle('dark-theme');
    
    // Switch the button text based on the current mode
    if (document.body.classList.contains('dark-theme')) {
        themeBtn.innerText = "Light Mode";
    } else {
        themeBtn.innerText = "Dark Mode";
    }
});
