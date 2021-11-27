// Assignment code here
let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let numbers = ['0','1','2','3','4','5','6','7','8','9'];
let special = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
let pw;


function generatePassword() {
  validatePassword();

}

function validatePassword() {
  let pwLength = parseInt(prompt('Choose a password length between 8 and 128 characters'));
  let specialFlag = confirm('Click OK to use special characters.');
  let numericFlag = confirm('Click OK to use numeric characters.');  
  let lowerFlag = confirm('Click OK to use lower case characters.');
  let upperFlag = confirm('Click OK to use upper case characters.');  

  if (Number.isNaN(pwLength)) {
    alert('Password length must be a number');
    return null;
  } else if (pwLength < 8) {
    alert('Password length must be more than 7 characters.');
    return null;
  } else if (pwLength > 128) {
    alert('Password length must be less than 129 characters.');  
    return null;
  }  

  if (specialFlag === false && numericFlag === false && lowerFlag === false && upperFlag === false) {
    alert('You must select at least one passwor configuration option');
    return null;
  }  
}



// original code below
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