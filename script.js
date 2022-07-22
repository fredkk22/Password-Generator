// Assign a variable to the button's ID
var generateBtn = document.querySelector('#generate');

// Generate random password upon clicking the button
function generatePassword() {

  // Declare/Define Variables
  var passwordResult = "";
  var passwordLength;
  var userChoices = [];
  var randUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
  var randLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
  var randSpec = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];
  var randNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // Prompt Section
  passwordLength = prompt("Please enter the length of your desired password:");

  if (!passwordLength) {
    return "Your Secure Password";
  } else if (8 > passwordLength || passwordLength > 128) {
    alert("Please enter a length between 8 and 128");
    return "Your Secure Password";
  } else { }

  // Confirm Section
  var confirmUpper = confirm("Would you like uppercase letters in your password?");
  var confirmLower = confirm("Would you like lowercase letters in your password?");
  var confirmNum = confirm("Would you like numbers in your password?");
  var confirmSpec = confirm("Would you like special characters in your password?");

  if (confirmUpper) {
    userChoices = randUpper.concat(userChoices);
  }

  if (confirmLower) {
    userChoices = randLower.concat(userChoices);
  }

  if (confirmNum) {
    userChoices = randNum.concat(userChoices);
  }

  if (confirmSpec) {
    userChoices = randSpec.concat(userChoices);
  }

  if (!confirmUpper && !confirmLower && !confirmNum && !confirmSpec) {
    alert("Please pick at least one option");
    return "Your Secure Password";
  } else { }

  // For Loop Section
  for (i = 0; i < passwordLength; i++) {
    passwordResult = passwordResult + userChoices[Math.floor(Math.random() * userChoices.length)];
  }

  return passwordResult;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);