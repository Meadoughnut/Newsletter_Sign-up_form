const userEmail = document.getElementById('email');
const button = document.getElementById('button');
const userInput = userEmail.value;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

button.addEventListener('click', function (event) {
    event.preventDefault();
    const userInput = userEmail.value;
    
        if (userInput === "") {
            alert("The email field cannot be empty.");
            
        }else if (!emailRegex.test(userInput)) {
            alert("Please Enter a a valid email address");
        } else {
            // Redirect to the index2 page with the userInput as a URL parameter
            window.location.href = `index2.html?userInput=${encodeURIComponent(userInput)}`;
        }
    
    
    });






































