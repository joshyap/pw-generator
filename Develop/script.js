// Assignment code here
let pwLength;
let pw = '';
let options = [        
  ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'], // 0
  ['0','1','2','3','4','5','6','7','8','9'], // 1
  ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'], // 2
  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'] // 3
];
let masterOptions = [];
let specialFlag;
let numericFlag;
let lowerFlag; 
let upperFlag;

function generatePassword() {  
  reset();
  validateInputs();

  // masterOptions contains the available chars to be used in a generated pw
  if (specialFlag) {masterOptions = masterOptions.concat(options[0])};
  if (numericFlag) {masterOptions = masterOptions.concat(options[1])}; 
  if (lowerFlag) {masterOptions = masterOptions.concat(options[2])};
  if (upperFlag) {masterOptions = masterOptions.concat(options[3])};
  // console.log(masterOptions);
  
  for (var i=0; i<pwLength; i++) {
    pw += masterOptions[Math.floor(Math.random() * masterOptions.length)];
  }

  console.log(pw);
  return pw;
}

function validateInputs() {
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

  pwLength = parseInt(prompt('Choose a password length between 8 and 128 characters'));

  specialFlag = confirm('Click OK to use special characters.');
  numericFlag = confirm('Click OK to use numeric characters.');  
  lowerFlag = confirm('Click OK to use lower case characters.');
  upperFlag = confirm('Click OK to use upper case characters.');

  if (specialFlag === false && numericFlag === false && lowerFlag === false && upperFlag === false) {
    alert('You must select at least one password configuration option');
    return null;
  }
}

function reset() {
  pw = '';
  options = [        
    ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'], // 0
    ['0','1','2','3','4','5','6','7','8','9'], // 1
    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'], // 2
    ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'] // 3
  ];
  masterOptions = [];
  specialFlag = false;
  numericFlag = false;
  lowerFlag = false; 
  upperFlag = false;
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