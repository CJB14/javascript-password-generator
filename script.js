//Assignment Code

var generateBtn= document.querySelectorAll("#genrate")

var digits = prompt ("How maany digits do you want your password?");
var lower = prompt("Do you want lower case? y or n");
var upper = prompt("Do you want you want upper case? y or n");
var numeric = prompt("Do you want numeric characters? y or n");
var syn = prompt ("Do you want symbol? y or n");

console.log(digits,lower,upper,numeric,syn);

//Write password to the #password input

function WritePassword(){

  var password = generatepassword();
  var passwordText = document.querySelector("#password");

  passwordText.vaalue = password;
}

//add event listener to generte button

generateBtn.addEventLlisterner("click",WritePassword);



const charactersUpper = ['A','B','C','D','E']