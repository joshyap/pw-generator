// Assignment code here
let pw = '';
let options = [        
  ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'], // 0
  ['0','1','2','3','4','5','6','7','8','9'], // 1
  ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'], // 2
  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'] // 3
];
let masterOptions = [];

function generatePassword() {  
  reset(); // reset default pw and options arrays
  let pwLength = document.getElementById('length').value;
  let specialFlag = document.getElementById('special').checked;
  let numericFlag = document.getElementById('numeric').checked;
  let lowerFlag = document.getElementById('lower').checked;
  let upperFlag = document.getElementById('upper').checked;

  // masterOptions contains the available chars to be used in a generated pw
  if (specialFlag) {masterOptions = masterOptions.concat(options[0])};
  if (numericFlag) {masterOptions = masterOptions.concat(options[1])}; 
  if (lowerFlag) {masterOptions = masterOptions.concat(options[2])};
  if (upperFlag) {masterOptions = masterOptions.concat(options[3])};

  if (specialFlag === false && numericFlag === false && lowerFlag === false && upperFlag === false) {
    alert('You must select at least one password configuration option.');
    return null;
  } else if (pwLength.length < 1) {
    alert('You must select a valid password length.')
  } else {
    for (var i=0; i<pwLength; i++) {
      pw += masterOptions[Math.floor(Math.random() * masterOptions.length)];
    }
  }

  return pw;
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