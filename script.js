// Assignment Code
var generateBtn = document.querySelector("#generate");

// Randomize integer from min - max
function randomInt(min,max){
  if (!max) {
    max=min;
    min=0;
  }

  var random = Math.random();
  return Math.floor(min*(1-random)+ random*max)
}

  function getRandomItem(list){
    return list[randomInt(list.length)];
  }

// Generate passcode
  function generatePassword(){
    var userInput = window.prompt("how many characters do you want your password");

    var passwordlenghth = parseInt(userInput);

    if (isNaN(passwordlenghth)){
      window.alert("Please insert number!");
    }

    If (passwordlenghth < 8 || passwordlenghth > 128); {
    window.alert("Password length must be between 8 and 128 characters")
    }



    // what variables they want in their password
var userNumbers = window.confirm ("Would you like to include numbers?")
var userSymbols = window.confirm("Would you like to include symbols")
var userLowercase = window.confirm("Would you like to include lowecase")
var userUppercase = window.confirm("Would you like to include uppercase")

// list password criteria

var numberList =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var symbolList = ["!", "@", "#", "$", "%", "^", "*"]
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// user options after answered promts
var useroptions =[];
for (var i = 0; i < lowercaseList.length; i++){
  uppercaseList(i) = lowercaseList(i). toUppercase();
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
generatedPassword = "";

// Randomize chosen items

for (var i = 0; i < passwordlenghth; i++){
  var randomList = getRandomItem(userOptions);
  var randomchar = getRandomItem(randomList);

  generatedPassword += randomchar
}
  }

