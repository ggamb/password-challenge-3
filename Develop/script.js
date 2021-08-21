// Assignment code here
const lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numericInputs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChar = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", "<", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "}", "|", "~"];

var randomLower = lowerChar[Math.floor(Math.random()*lowerChar.length)];
console.log(randomLower);

var randomUpper = upperChar[Math.floor(Math.random()*upperChar.length)];
console.log(randomUpper);

var randomNum = numericInputs[Math.floor(Math.random()*numericInputs.length)];
console.log(randomNum);

var randomSpecial = specialChar[Math.floor(Math.random()*specialChar.length)];
console.log(randomSpecial);

function getCriteria() {
  var lowerConfirm = confirm("Would you like to add lower case characters?");
  var upperConfirm = confirm("Would you like to add upper case characters?");
  var numberConfirm = confirm("Would you like to add numeric characters?");
  var specialConfirm = confirm("Would you like to add special characters?");
}

function passwordLength() {
  var howLong = Number(prompt("How long would you like the password to be. Password must be between 8 and 128 characters."));

  while(howLong < 8 || howLong > 128 || howLong === null){
    window.alert("Incorrect input. Password must be between 8 and 128 characters.");
    howLong = prompt("Incorrect input. Password must be between 8 and 128 characters.");
  }
  
  console.log(howLong);
  return howLong;
}

//passwordLength();
//getCriteria();


function passwordGenerator(){

  var passLength = passwordLength();

  for(var i = 0; i< passLength; i++){

  }

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
