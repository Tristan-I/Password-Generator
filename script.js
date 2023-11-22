// Assignment Code
//query selectors
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

function generatePassword() {
  console.log("You clicked on the button");
}
  //Var arrays
  var lengthSelection= window.prompt("Please choose a password legth between 8 and 128 characters. Then press OK.")
  var numberSelection= "0123456789"
  var upperSelection= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerSelection= "abcdefghijklmnopqrstuvwxyz"
  var specialSelection= "!@#$%^&*()_+-={[}],.?/|\`~";
  
  //event listener
  generateBtn.addEventListener("click",writePassword);

  var confirmNumber = confirm ("Click OK to confirm numbers in your password.");
  var confirmUppercase = confirm ("Click OK to confirm uppercase values in your password.");
  var confirmLowercase = confirm ("Click OK to confirm lowercase values in your password.");
  var confirmSpecial = confirm ("Would you like to add special characters in your password?");

  //Confirm if password does/not comply with criteria, and if else to choose at least one option.
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Whoops! Please make sure to choose a password length between 8 and 128 characters.");
    return confirm;

  }

  else if (!confirmNumber && !confirmUppercase && !confirmLowercase && !confirmSpecial) {
    alert("Error, please choose at least one character choice.");
    var confirmNumber = confirm ("Click OK to confirm numbers in your password.");
    var confirmUppercase = confirm ("Click OK to confirm uppercase values in your password.");
    var confirmLowercase = confirm ("Click OK to confirm lowercase values in your password.");
    var confirmSpecial = confirm ("Would you like to add special characters in your password?");
    return "";
  }
  for(i=0;i < length; i++){

  }
  //generate passsword using criteria

  
  //display generated password.
  return "Generated password";

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function to make the consumer's random password
function writePassword() {
  var random= "";
  passwordText.value = password;

  }