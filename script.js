// Assignment Code
//query selectors
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

function generatePassword() {
  console.log("You clicked on the button");
  //Var arrays
  var lengthSelection= window.prompt("Please choose a password legth between 8 and 128 characters. Then press OK.")
  var numberSelection= "0123456789"
  var upperSelection= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerSelection= "abcdefghijklmnopqrstuvwxyz"
  var specialSelection= "!@#$%^&*()_+-={[}],.?/|\`~";
  
  //event listener
  generateBtn.addEventListener("click",writePassword);

  var confirmUppercase= confirm ("Click OK to confirm uppercase values in your password.")
  var confirmLowercase= confirm ("Click OK to confirm lowercase values in your password.")
  var confirmSpecial= confirm ("Would you like to add special characters in your password?")
  //validate imput 
  for(i=0;i < length; i++){

  }
  //generate passsword using criteria

  
  //display generated password.
  return"Generated password";

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
