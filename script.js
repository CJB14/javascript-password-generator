// Assignment Code
var generateBtn = document.querySelector("#generate");

// randomize integer
function randomInt(min,max){
if (!max){
  max = min;
  min = 0;
}

var random = Math.random();
return Math.floor(min*(1 - random) + random*max)
}


// Generate passcode
  function generatePassword(){
  

    var passlen = window.prompt("how many characters do you want your password");

    if (passlen < 8 || passlen > 128) 
    window.alert("Password length must be between 8 and 128 characters")
    
// list password criteria
var numberList =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var symbolList = ["!", "@", "#", "$", "%", "^", "*"]
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// what variables they want in their password
var userNumbers = window.confirm ("Would you like to include numbers?")
var userSymbols = window.confirm("Would you like to include symbols")
var userLowercase = window.confirm("Would you like to include lowecase")
var userUppercase = window.confirm("Would you like to include uppercase")

//Emty array options
var userOptions =[]


// user answers true to confirm statements
if (userOptions === true){
  userOptions.push(numberList);
}
if (userSymbols === true){
  userOptions.push(symbolList);
}
if (userLowercase === true){
  userOptions.push(lowercaseList);
}
if (userUppercase === true){
  userOptions.push(uppercaseList);
}

// add lowercase if respose is false
if (userOptions.length === 0){
  userOptions.push(lowercaseList);
}
// empty string fill with password

var generatedPassword = "";

// Randomize chosen items

for (var i = 0; i < passlen; i++){
var randomList = randomInt(userOptions);
var randomchar = randomInt(randomList);
generatedPassword += randomchar
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
