// Assignment Code
/* 
Questions
---------
Q: What if user pass len < 8 or > 128?
A: Alert message and quit

Q: What is meant by "Special Characters?
A: Use OWASP list (excluding the space): https://owasp.org/www-community/password-special-characters

Q: What happens if the user doesn't choose ANY character types?
A: Alert user to choose at least one type and quit

Q: Can the user reset the password?
A: No. But the user can click the button again to generate a new password


Research
--------
- Research special characters. (See link above in Questions)
- Research how to make an alert pop up.
- How do I check the user entered length? (Hint: use conditional)
- How do I use Math.random() to pick a random letter?
- How to randomly select from a specific group of characters? (e.g. upper vs lower)

Steps
-----

DECLARE VARS
string password (the result)
num passLength (user input)
bool useUpper (user input)
bool useLower (user input)
bool useSpecial (user input)
bool useNumber (user input)
arr lowerChars
arr upperChars
arr specialChars
arr numChars
arr choices (array containing all characters chosen by the user)

PROMPT user for password length

CONFIRM if user would like lower case
IF user would like lower case
THEN add all lowerChars to choices

CONFIRM if user would like upper case

CONFIRM if user would like special characters

CONFIRM if user would like numbers

..

Tasks
-----
- Read requirements 3-5 times
- List questions to ask
- Make a list of items to research
- Get questions answerwed
- Do research
- Break down app into smaller problems
- Choose problem to start with
- Pseudocode the problem
- Code the problem
- Debug the problem
- Choose next problem and repeat steps
- Deploy the app
- Test the deployed app using the links i will submit
- Create a professional readme
- Submit both links (GitHub, and GitHub Pages) in canvas

PseudoCode
--------------------------------
DECLARE VARIABLES

var generateRandUpper
var generateRandLower
var generateRandSpecChar = "!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var generateRandNum

CREATE FUNCTION FOR GENERATING RANDOM CHARACTERS

function generateRandUpper() {
  return String.fromCharCode(Math.floor(Math.random()*26) + 65))
}

function generateRandLower() {
  return String.fromCharCode(Math.floor(Math.random()*26) + 97))
}

generateRandSpecChar = Math.floor(Math.random()*32)

Pseudo-Code for Alert Messages

FUNCTION FOR WRITING PASSWORD
  IF CONFIRM Uppercase
    THEN call function generateRandUpper
  ELSE IF CONFIRM Lowercase
    THEN call function generateRandLower
  
  IF CONFIRM SpecChar
    THEN call function generateRandSpecChar
  IF CONFIRM Number
    THEN call function generateRandNum


function writePassword() {
  if (confirm("Would you like uppercase letters in your password?") {
    generateRandUpper();
  }

  return password
}

var passwordResult;
var passwordLength;
var confirmPasswordUpper = confirm("Would you like uppercase letters in your password?";
var confirmPasswordLower = confirm("Would you like uppercase letters in your password?";
var confirmPasswordNum = confirm("Would you like uppercase letters in your password?";
var confirmPasswordSpec = confirm("Would you like uppercase letters in your password?";
var userChoices = [];

function writePassword {

passwordLength = prompt("Please enter the length of your desired password.")

if (!password) {
  return;
} else if (password > 8 || password > 128) {
  alert("Please enter a length between 8 and 128");
  return;
} else if (8 <= password <= 128) {
  passwordResult.length = password;
}

if (confirmPasswordUpper) {
  userChoices.concat(randUpper);
} else {
  return;
}

if (confirmPasswordLower) {
  userChoices.concat(randLower);
} else {
  return;
}

if (confirmPasswordNum) {
  userChoices.concat(randNum);
} else {
  return;
}

if (confirmPasswordSpecChar) {
  userChoices.concat(randSpecChar);
} else {
  return;
}

userChoices = passwordResult;

return passwordResult;

*/
// var generateBtn = document.querySelector('#generate');
// var passwordResult;
// var passwordLength;
// var confirmPasswordUpper = confirm("Would you like uppercase letters in your password?");
// var confirmPasswordLower = confirm("Would you like uppercase letters in your password?");
// var confirmPasswordNum = confirm("Would you like uppercase letters in your password?");
// var confirmPasswordSpec = confirm("Would you like uppercase letters in your password?");
// var randUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
// var randLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
// var randSpecChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];
// var randNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var userChoices = [];

var passwordResult;
var userChoices = [];

function generatePassword() {

  var confirmPasswordUpper = "Would you like uppercase letters in your password?";
  var confirmPasswordLower = "Would you like lowercase letters in your password?";
  var confirmPasswordNum = "Would you like numbers in your password?";
  var confirmPasswordSpec = "Would you like special characters in your password?";
  var randUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
  var randLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
  var randSpecChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];
  var randNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  function generateRandLower() {
    randLower[Math.floor(Math.random() * randLower.length)];
  }
  
  function generateRandNum() {
    randNum[Math.floor(Math.random() * randNum.length)];
  }
  
  function generateRandSpecChar() {
    randSpecChar[Math.floor(Math.random() * randSpecChar.length)];
  }
  
  function generateRandUpper() {
    randUpper[Math.floor(Math.random() * randUpper.length)];
  }  

  generateRandLower()
  generateRandUpper()
  generateRandNum()
  generateRandSpecChar()

  passwordLength = prompt("Please enter the length of your desired password.");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a length between 8 and 128");
    return;
  } else if (8 <= passwordLength || passwordLength <= 128) {
    userChoices.length = passwordLength;
  } else {
    return;
  }

  if (confirm(confirmPasswordUpper) === true) {
    userChoices.push.apply(randUpper);
  }

  if (confirm(confirmPasswordLower) === true) {
    userChoices.push.apply(randLower);
  }

  if (confirm(confirmPasswordNum) === true) {
    userChoices.push.apply(randNum);
  }

  if (confirm(confirmPasswordSpec) === true) {
    userChoices.push.apply(randSpecChar);
  }

  passwordResult = userChoices.toString();
}

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = passwordResult;
}

var generateBtn = document.querySelector('#generate');
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
