// Add their email and submit the form.....DONE
// - See a success message with their email after successfully submitting the form....DONE
// - See form validation messages if:
//   - The field is left empty
//   - The email address is not formatted correctly
// - View the optimal layout for the interface depending on their device's screen size
// - See hover and focus states for all interactive elements on the page




// this is the email from the span
const userEmail = document.getElementById('email');

// this is the button
const button = document.getElementById('button');

// this is whatever the user filled in


button.addEventListener('click', function(event){
    event.preventDefault();

    const userInput = userEmail.value;

    // Redirect to the index2 page with the userInput as a URL parameter
    window.location.href = `index2.html?userInput=${encodeURIComponent(userInput)}`;
});
    

   

  

// when i click the button subscribe{
//     go to another page and post it the emailAddress.
// }

