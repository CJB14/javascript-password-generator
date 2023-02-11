// Assignment Code
var generateBtn = document.querySelector("#generate");


// Generate passcode
  function generatePassword(){
    
    var passlen = window.prompt("how many characters do you want your password");

    If (passlen < 8 || passlen > 128) 
    window.alert("Password length must be between 8 and 128 characters")
    return;
    }
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

// user options after answered promts
var userOptions =[];
for (var i = 0; i < lowercaseList.length; i++){
  uppercaseList(i) = lowercaseList(i). touppercase();
}

// user answers true to confirm statements
if (userNumbers === true){
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
generatePassword = "";

// Randomize chosen items

for (var i = 0; i < passlen; i++){
  var randomList = getRandomItem(userOptions);
  var randomchar = getRandomItem(randomList);

  generatePassword += randomchar
}
  
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);