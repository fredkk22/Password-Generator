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

*/

var generateRandUpper
var generateRandLower
var generateRandSpecChar
var generateRandNum

function generateRandUpper() {
  return String.fromCharCode(Math.floor(Math.random()*26) + 65)
}

function generateRandLower() {
  return String.fromCharCode(Math.floor(Math.random()*26) + 97)
}

function generateRandNum() {
  return String.fromCharCode(Math.floor(Math.random()*10) + 48)
}

function generateRandSpecChar() {
  var allSpecChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return allSpecChar[Math.floor(Math.random()*32)];
}


var generateBtn = document.querySelector('#generate');


randomLet = Math.floor(Math.random()*26);



function generatePassword() {
  var password = 'password';
  // TODO: add code to generate the password here




  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
