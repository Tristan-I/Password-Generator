// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("You clicked on the button");
  //promt user for password criteria: length 0<128, lowercase, uppercase, special characters.
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
