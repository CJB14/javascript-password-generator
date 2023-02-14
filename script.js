// Assignment Code
var generateBtn = document.querySelector("#generate");

// define all characters
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var symbolList = ["!", "@", "#", "$", "%", "^", "*"]

// empty string to create charset and password variables
var charset = "";
var password = "";

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}


// password generator logic
var generatePassword = function() {
var passLength = 0;
// check password length parameter
passLength = prompt("Select a password length: Mininum 8, Maximum 128.")

if (passLength >= 8 || passLength <= 128) {
console.log(passLength);
} else {
alert("Your password must be between 8 and 128.")
return "";
}

// check for uppercase
var passTypeUpper = confirm("Do you want to include uppercase letters in your password?")
// add uppercase to charset if wanted
if (passTypeUpper) {
charset += uppercaseList
}


// check for lowercase
var passTypeLower = confirm("Do you want to include lowercase letters in your password?")
// add lowercase to charset if wanted
if (passTypeLower) {
charset += lowercaseList
}


// check for numbers
var passTypeNum = confirm("Do you want to include numbers i9n your password?")
// add numbers to charset if wanted
if (passTypeNum) {
charset += numberList
}


// check for specials
var passTypeSpec = confirm("Would you like to include symbols in your password?")
// add specials to charset if wanted
if(passTypeSpec) {
charset += symbolList
}


if (!passTypeUpper && !passTypeLower && !passTypeNum && !passTypeSpec){
alert("Please select at least one set of characters.")
return "";
}

// iterator to run through charset and select the password
for (var i = 0; i < passLength; i++) {
password += charset[Math.floor(Math.random() * charset.length)]
};

return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);