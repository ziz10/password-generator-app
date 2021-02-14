// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays for Special characters, numbers, alpha

var specialChar = ["!", "#", "$", "%", "&", "*", "+", "@", "?", "'", "/", "<", ">", "[", "]", "{", "}", "~", "_", ".", "\:", "\;", "=", "\\", "|", "^", "`", "-", ","];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, ];
var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// User input variables
var confirmLength;
var confirmNumber;
var confirmSpecialChar;
var confirmUpperAlpha;
var confirmLowerAlpha;

//user validation for correct length
function inputOptions() {
    var confirmLength = parseInt(prompt("Your password must be between 8 and 128 characters."));

  if (isNaN(confirmLength) === true) {
    alert("Please choose a number between 8 and 128.");
    return 
  }
  if (confirmLength < 8) {
    alert("Please enter a number greater than 8.");
    return
  }
  if (confirmLength > 128) {
    alert("Please enter a number less than 128.");
    return
  }
  inputOptions();
//password criteria user selections
    confirmNumber = confirm("Do you want password to contain numbers?");
    confirmSpecialChar = confirm("Do you want password to contain special characters?");
    confirmUpperAlpha = confirm("Do you want password to contain UPPERCASE letters?");
    confirmLowerAlpha = confirm("Do you want password to contain lowercase letters?");

//alert if no criteria is selected
if (!confirmNumber && !confirmSpecialChar && !confirmUpperAlpha && !confirmLowerAlpha) {
    choices = alert("You must choose at least one criteria!");
    return
}
//User criteria options
var userCriteria = {
  confirmLength:confirmLength,
  confirmUpperAlpha:confirmUpperAlpha,
  confirmLowerAlpha:confirmLowerAlpha,
  confirmNumber:confirmNumber,
  confirmSpecialChar:confirmSpecialChar,
}
return userCriteria;
}   

//random selection for variables
function randomChar(array) {
  var index = Math.floor(Math.random() * array.length);
  var element = array[index];

  return element;
}
//function that will look at and call the password with selected characters, and included characters
function generatePassword() {
  var userCriteria = inputOptions();

  var password = [];
  var chosenChar = [];
  var charsInc = []; 

//various character options
if (userCriteria.confirmSpecialChar) {
  charsInc = charsInc.concat(specialChar);
  chosenChar.push(randomChar(specialChar));
}

if (userCriteria.confirmNumber) {
  charsInc = charsInc.concat(number);
  chosenChar.push(randomChar(number));
}

if (userCriteria.confirmUpperAlpha) {
  charsInc = charsInc.concat(upperAlpha);
  chosenChar.push(randomChar(upperAlpha));
}

if (userCriteria.confirmLowerAlpha) {
  charsInc = charsInc.concat(lowerAlpha);
  chosenChar.push(randomChar(lowerAlpha));
}
//Loop to check length
for(var i=0; i < userCriteria.confirmLength; i++) {
  var possibleChar = randomChar(charsInc);
  password.push(possibleChar);
}
//Loop to match the password with the length chosen
for(var i=0; i < chosenChar.length; i++) {
  password[i] = chosenChar[i];
}
// Include a return call and join characters into string 
return password.join(" ");
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}


generatePassword();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);