// Assign variable to the "#generate" ID in the HTML file
var generateBtn = document.querySelector('#generate');

// Generate password using the generatePassword() function upon clicking the button
function generatePassword() {
  // Declare all variables to be used in the function (excluding Lines 25-28)
  var passwordResult = "";
  var passwordLength;
  var userChoices = [];
  var randUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
  var randLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
  var randSpecChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];
  var randNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // First, prompt the user to enter the length of their password
  passwordLength = prompt("Please enter the length of your desired password:");
  // Determine if the value entered for "passwordLength" was sufficient
  if (!passwordLength) {
    return "Your Secure Password";
  } else if (8 > passwordLength || passwordLength > 128) {
    alert("Please enter a length between 8 and 128");
    return "Your Secure Password";
  } else { }

  var confirmPassUpper = confirm("Would you like uppercase letters in your password?");
  var confirmPassLower = confirm("Would you like lowercase letters in your password?");
  var confirmPassNum = confirm("Would you like numbers in your password?");
  var confirmPassSpec = confirm("Would you like special characters in your password?");

  if (confirmPassUpper) {
    userChoices = randUpper.concat(userChoices);
  }

  if (confirmPassLower) {
    userChoices = randLower.concat(userChoices);
  }

  if (confirmPassNum) {
    userChoices = randNum.concat(userChoices);
  }

  if (confirmPassSpec) {
    userChoices = randSpecChar.concat(userChoices);
  }

  if (!confirmPassUpper && !confirmPassLower && !confirmPassNum && !confirmPassSpec) {
    alert("Please pick at least one option");
    return "Your Secure Password";
  } else { }

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
