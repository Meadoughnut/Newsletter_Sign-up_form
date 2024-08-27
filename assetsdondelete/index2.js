// Get the URL parameters

const urlParams = new URLSearchParams(window.location.search);


// Extract the feedback parameter from the URL
const userInput = urlParams.get('userInput');

const userEmail = document.getElementById('userEmail');

userEmail.innerHTML = `<strong>${userInput}</strong>`;
