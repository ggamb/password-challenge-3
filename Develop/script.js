// Assignment code here
const lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numericInputs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChar = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", "<", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "}", "|", "~"];
const arrayOfRandoms = [
  getRandLower(),
  getRandUpper(),
  getRandNum(),
  getRandSpecial()
];

var randonNum = 0;

function getRandLower() {
  for(var i = 0; i < 1; i++){
    randonNum = Math.floor(Math.random() * lowerChar.length);
  }

  return lowerChar[randonNum];
};

function getRandUpper() {
  for(var i = 0; i < 1; i++){
    randonNum = Math.floor(Math.random() * upperChar.length);
  }

  return upperChar[randonNum];
};

function getRandNum() {
  for(var i = 0; i < 1; i++){
    randonNum = Math.floor(Math.random() * numericInputs.length);
  }

  return numericInputs[randonNum];
};

function getRandSpecial() {
  for(var i = 0; i < 1; i++){
    randonNum = Math.floor(Math.random() * specialChar.length);
  }

  return specialChar[randonNum];
};

/*
function getCriteria() {
  var lowerConfirm = confirm("Would you like to add lower case characters?");
  var upperConfirm = confirm("Would you like to add upper case characters?");
  var numberConfirm = confirm("Would you like to add numeric characters?");
  var specialConfirm = confirm("Would you like to add special characters?");
}*/

function passwordLength() {
  var howLong = Number(prompt("How long would you like the password to be? Password must be between 8 and 128 characters."));

  while(howLong < 8 || howLong > 128 || howLong === null){
    howLong = Number(prompt("Incorrect input. How long would you like the password to be? Password must be between 8 and 128 characters."));
  }
  
  console.log(howLong);
  return howLong;
};

//passwordLength();
//getCriteria();

function generatePassword(){

  var passLength = passwordLength();
  var password = "";

  for(var i = 0; i < passLength; i++) {
    var rand = Math.floor(Math.random()*arrayOfRandoms.length);
    console.log("loop random num:" + rand);
    switch(rand){
      case 0:
        password += getRandLower();
        break;
      case 1:
        password += getRandUpper();
        break;
      case 2:
        password += getRandNum();
        break;
      case 3:
        password += getRandSpecial();
        break;
      default:
        break;
    }
  }
  console.log(password);

};

//generatePassword();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
