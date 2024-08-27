// Add their email and submit the form
// - See a success message with their email after successfully submitting the form
// - See form validation messages if:
//   - The field is left empty
//   - The email address is not formatted correctly
// - View the optimal layout for the interface depending on their device's screen size
// - See hover and focus states for all interactive elements on the page




// this is the email from the span
const userEmail = document.getElementById('userEmail');

// this is the button
const button = document.getElementById('button');

// this is whatever the user filled in
const emailAddress = document.getElementById('email').value;

button.addEventListener('click', function(event){
    event.preventDefault();
    

    userEmail.innerHTML = `<strong>${emailAddress}</strong>`

  
})

// when i click the button subscribe{
//     go to another page and post it the emailAddress.
// }

