// Assignment Code
var generateBtn = document.querySelector("#generate");

// define all characters
var uppercaseList = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var lowercaseList = ["abcdefghijklmnopqrstuvwxyz"]
var numberList = ["123456789"]
var symbolList = ["! @ #$%^*"]

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
if (passTypeUpper) {
charset += uppercaseList
}


// check for lowercase
var passTypeLower = confirm("Do you want to include lowercase letters in your password?")
if (passTypeLower) {
charset += lowercaseList
}


// check for numbers
var passTypeNum = confirm("Do you want to include numbers in your password?")
if (passTypeNum) {
charset += numberList
}


var passTypeSpec = confirm("Would you like to include symbols in your password?")
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
Footer
