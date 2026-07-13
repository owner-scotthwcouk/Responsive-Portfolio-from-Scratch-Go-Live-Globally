// --- 1. USER PERSONALIZATION ---
// This opens a browser popup asking for the user's name
const userName = prompt("Welcome to my site! What is your name?")

// We find the 'user-name' span in the HTML
const nameDisplay = document.getElementById("user-name");


// If the user typed a name, we display it. Otherwise, we default to 'Guest'.
if (userName) {
    nameDisplay.innerText = userName;
} else {
    nameDisplay.innerText = "Guest";
}

// --- 2. DYNAMIC GREETING ---
// We use the built-in Date object to get the current hour (0-23)
const currentHour = new Date().getHours();
const greetingElement = document.getElementById("greeting-text");
let message;

// Logic to dwtwrmin the greeting based on the hour
if (currentHour < 12) {
    message = "Good Morning";
} else if (currentHour < 18) {
    message = "Good Afternoon";
} else {
    message = "Good Evening"
}

// Update the greeting text in the HTML
greetingElement.innerText = message;

// --- 3. Dark Mode Toggle
const themeBtn = document.getElementById("theme-toggle");

// This listens for a 'click' event on the button
themeBtn.addEventListener("click", () => {

    // The 'toggle' command adds the class if it is missing, or removes it if it's there
    document.body.classList.toggle("dark-theme");

    // We update the button text so the user knows what the next click will do 
    if (document.body.classList.contains("dark-theme")) {
        themeBtn.innerText = "Light Mode"
    } else {
        themeBtn.innerText = "Dark Mode"
    }
});

// A little console log to help you debug in this video
console.log("The Portfolio 'Brain' is now active!")