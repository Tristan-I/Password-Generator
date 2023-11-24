// Assignment Code
//query selectors
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

function generatePassword() {
  console.log("You clicked on the button");
  var lengthSelection = window.prompt("Please choose a password legth between 8 and 128 characters. Then press OK.")
  var numberSelection = "0123456789";
  var upperSelection = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerSelection = "abcdefghijklmnopqrstuvwxyz";
  var specialSelection = "!@#$%^&*()_+-={[}],.?/|\`~";
  var selectedChar = "";
  //event listener
  generateBtn.addEventListener("click", writePassword);

  var confirmNumber = confirm("Click OK to confirm numbers in your password.");
  var confirmUppercase = confirm("Click OK to confirm uppercase values in your password.");
  var confirmLowercase = confirm("Click OK to confirm lowercase values in your password.");
  var confirmSpecial = confirm("Would you like to add special characters in your password?");

  //Confirm if password does/not comply with criteria, and if else to choose at least one option.
  if (lengthSelection < 8 || lengthSelection > 128) {
    alert("Whoops! Please make sure to choose a password length between 8 and 128 characters.");
    return "";
  } else if (!confirmNumber && !confirmUppercase && !confirmLowercase && !confirmSpecial) {
    alert("Error, please choose at least one character choice.");
    confirmNumber = confirm("Click OK to confirm numbers in your password.");
    confirmUppercase = confirm("Click OK to confirm uppercase values in your password.");
    confirmLowercase = confirm("Click OK to confirm lowercase values in your password.");
    confirmSpecial = confirm("Would you like to add special characters in your password?");
    return "";
  } 
  if (confirmNumber) {
    selectedChar += numberSelection
  } 
  if (confirmUppercase) {
    selectedChar += upperSelection
  } 
  if (confirmLowercase) {
    selectedChar += lowerSelection
  } 
  if (confirmSpecial) {
    selectedChar += specialSelection
  }
console.log(selectedChar)
  //generate passsword using criteria
  var product = ""
  for (i = 0; i < lengthSelection; i++) {
    var random = Math.floor(Math.random() * selectedChar.length)
    product = product + selectedChar[random]
  }
  //display generated password.
  return product;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);