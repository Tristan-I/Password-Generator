// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("You clicked on the button");
  //promt user for password criteria: length 8<128, lowercase, uppercase, special characters.
  var confirmNumber= confirm ("Please choose a character length between 8 and 128 for your password.")
  var confirmUppercase= confirm ("Would you like uppercase values in your password?")
  var confirmLowercase= confirm ("Would you like lowercase values in your password?")
  var confirmSpecial= confirm ("Would you like to add special characters in your password?")
  //validate imput 
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
