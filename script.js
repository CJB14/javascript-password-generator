document.getElementById('generate').addEventListener('click', function() {
  alert(generatePassword());
});

//Password Criteria
passwordOptions = {
number : "1234567890",
symbol : "!@#$%&",
uppercase : "abcdefghijklmnopqrstuvwxyz",
lowercase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",

//Variables they want in password
getnumbers: window.confirm("Would you like to include numbers in your password?"),
getsymbol: window.confirm("Would you like to include symbols in your password?"),
getuppercase: window.confirm("Would you like to include uppercase letters in your password?"),
getLowerCase: window.confirm("Would you like to include lowercase letters in your password?")

};

// Generate password
generatePassword = function(){
 var passwordlength = window.prompt("Enter the amount of characters you want for your password.");{
    
// Check to see if password length is correct
if (passwordlength >= 8 && characterAmount <= 128){
  window.alert("password must be between 8 and 128 characters")

}}


// Ask to include numbers
const  getnumber = window.confirm("Would you like to include numbers in your password?");{
  
  if (getnumber){
    passInfo += passwordOptions.number;
    passChars.push(getRandomChar(passwordOptions.number));
  };
}
// Ask to include Symbol
const getsymbol= window.confirm("Would you like to include symbols in your password?");

if (getsymbol) {
  passInfo += passwordOptions.symbol;
  passChars.push(getRandomChar(passwordOptions.symbol));
};

// Ask to include lowercase
const getlowerCase = window.confirm("Would you like to include lowercase letters in your password?");

if (getlowerCase) {
  passInfo += passwordOptions.lowerCase;
  passChars.push(getRandomChar(passwordOptions.lowerCase));
};

// Ask to include uppercase

const getuppercase = window.confirm("Would you like to include uppercase letters in your password?");

if (getuppercase){
  passInfo += passwordOptions.uppercase;
  passChars.push(getuppercase(passwordOptions.uppercase));

}
}
