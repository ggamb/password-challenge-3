//Arrays needed for the functions below to select upper and lower case characters, numbers, and special characters
const lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numericInputs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChar = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", "<", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "}", "|", "~"];

//Array used to select random upper and lower case characters, numbers, or special character
const arrayOfRandoms = [
  getRandLower(),
  getRandUpper(),
  getRandNum(),
  getRandSpecial()
];


//Global variables
var randomNum = 0;
var lowerConfirm = false;
var upperConfirm = false;
var numConfirm = false;
var specialConfirm = false;


//Functions to generate a new upper and lower case character, number, or special character based on the length of the array
function getRandLower() {

  randomNum = Math.floor(Math.random() * lowerChar.length);

  return lowerChar[Math.floor(Math.random() * lowerChar.length)];
};

function getRandUpper() {
  randomNum = Math.floor(Math.random() * upperChar.length);

  return upperChar[randomNum];
};

function getRandNum() {
  randomNum = Math.floor(Math.random() * numericInputs.length);

  return numericInputs[randomNum];
};

function getRandSpecial() {
  randomNum = Math.floor(Math.random() * specialChar.length);

  return specialChar[randomNum];
};


//Functions to get user input to add upper and lower case characters, numbers, and special characters
function setLowerConfirm(){
  lowerConfirm = confirm("Would you like to add lower case characters?");
};

function setUpperConfirm(){
  upperConfirm = confirm("Would you like to add upper case characters?");
};

function setNumberConfirm(){
  numConfirm = confirm("Would you like to add numerical characters?");
};

function setSpecialConfirm(){
  specialConfirm = confirm("Would you like to add special case characters?");
};

//Function to ask user what they characters they would like in the password
function getCriteria() {
  setLowerConfirm();
  setUpperConfirm();
  setNumberConfirm();
  setSpecialConfirm();
};

//Function to get user input on length of the password
function passwordLength() {
  var howLong = prompt("How long would you like the password to be? Password must be between 8 and 128 characters.");

  while(howLong < 8 || howLong > 128 || howLong === null || isNaN(howLong)){
    howLong = prompt("Incorrect input. How long would you like the password to be? Password must be between 8 and 128 characters.");
  }

  return howLong;
};

//Function to generate the password based on user responses
function generatePassword(){
  
  var passLength = passwordLength();
  var password = "";

  getCriteria();

  for(var i = 0; i < passLength; i++) {
    var rand = Math.floor(Math.random()*arrayOfRandoms.length);
    var character;

    switch(rand){
      case 0:
        if(lowerConfirm){
          password += getRandLower();
          break;
        } else {
          i--;
          break;
        }
      case 1:
        if(upperConfirm){
          password += getRandUpper();
          break;
        } else {
          i--;
          break;
        }
      case 2:
        if(numConfirm){
          password += getRandNum();
          break;
        } else {
          i--;
          break;
        }
      case 3:
        if(specialConfirm){
          password += getRandSpecial();
          break;
        } else {
          i--;
          break;
        }
      default:
        i--;
        break;
    }
  }
  return password;
};

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