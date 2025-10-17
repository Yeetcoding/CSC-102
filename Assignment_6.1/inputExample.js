/*  Code written by Lincoln Willison
    Last updated 10/16/2025
*/

// This function is the main function called in the HTML page that runs when the button is pressed
function saveForm(){

  // Variable setups for later use
  let firstName = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let zipCode = document.getElementById("zipCode").value.trim();
  //Variable checks for testing
  console.log("firstName = " + firstName);
  console.log("lastName = " + lastName);
  console.log("zipCode = " + zipCode);

  let fullName = firstName + " " + lastName;
  console.log("fullName = " + fullName);

  let displayMessage = "";
  let randomDay = randomRange(2,50);

  //Checks on the created and existing variables to make sure none go outside the boundaries of the assignment -- 
  // -- prints secret message if everything is good  
  if (fullName.length > 20 || fullName.length == 1 ){
    displayMessage = "Your name is too long. Please have a conversation with your parents to sort this out."
    document.getElementById("secretMessage").style.display = 'none';
  }
  else if (zipCode.length != 5){
    displayMessage = "Your Zip Code is nonexistent for Planet Earth. If you are an alien, please visit the appropriate sub-website."
    document.getElementById("secretMessage").style.display = 'none';
  }
  else if (zipCode.length == 5 && fullName.length <= 20){
    let secretMessage = "Dear " + fullName + ", we regret to inform you that you will cease to live due to natural causes in " + randomDay + " days."
    document.getElementById("secretMessage").textContent = secretMessage;
    document.getElementById("secretMessage").style.display = 'inline';
  }

  //Prints the result of the IF statements to the webpage   
  document.getElementById("displayMessage").textContent = displayMessage;

}


// λ