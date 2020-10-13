// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declaring Variables
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "#", "$", "%", "(", ")", "*", ";", "@", "[", "]", "{", "}", "&", "?"];
var passwordLength = " ";
var charTypeLower = null;
var charTypeUpper = null;
var charTypeNumeric = null;
var charTypeSpecial = null;

// Write password to the #password input
function writePassword() {
  
  // Prompts & variable declaration for password criteria
  alert("Select the criteria you would like for your password.");
  passwordLength = prompt("What length is needed for your password? \n NOTE: Password length must be at least 8 characters and no more than 128 characters.");
  // console.log(passwordLength);
  
  // Ensure user inputs valid value for password length
  while (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
    passwordLength = prompt("Please enter valid length for password. Password length must be at least 8 characters and no more than 128 characters.");
    // console.log(passwordLength);
  }

    charTypeLower = confirm("Would you like to include lowercase characters? (e.g. abcde) \n Press OK (Yes) or Cancel (No).");
    // console.log(charTypeLower);
    charTypeUpper = confirm("Would you like to include uppercase characters? (e.g. ABCDE) \n Press OK (Yes) or Cancel (No).");
    // console.log(charTypeUpper);
    charTypeNumeric = confirm("Would you like to include numeric characters? (e.g. 12345) \n Press OK (Yes) or Cancel (No).");
    // console.log(charTypeNumeric);
    charTypeSpecial = confirm("Would you like to include special characters? (e.g. !, ?, $, %, (, ), *, ;, @, [, ], {, }, &, #) \n\n Press OK (Yes) or Cancel (No).");
    // console.log(charTypeSpecial);

  // Ensure that user selects at least one password criteria
  while (charTypeLower === false && charTypeUpper === false && charTypeNumeric === false && charTypeSpecial === false){
    alert("You must select at least one criteria for password.")
    charTypeLower = confirm("Would you like to include lowercase characters? (e.g. abcde) \n Press OK (Yes) or Cancel (No).");
    // console.log(charTypeLower);
    charTypeUpper = confirm("Would you like to include uppercase characters? (e.g. ABCDE) \n Press OK (Yes) or Cancel (No).");
    // console.log(charTypeUpper);
    charTypeNumeric = confirm("Would you like to include numeric characters? (e.g. 12345) \n Press OK (Yes) or Cancel (No).");
    // console.log(charTypeNumeric);
    charTypeSpecial = confirm("Would you like to include special characters? (e.g. !, ?, $, %, (, ), *, ;, @, [, ], {, }, &, #) \n\n Press OK (Yes) or Cancel (No).");
    // console.log(charTypeSpecial);
  }
  
  var password = generatePassword(); // Setting value of password variable to return value of generatePassword() function
  var passwordText = document.querySelector("#password"); // Setting value of passwordText variable equal to password class

  passwordText.value = password; // Setting value of passwordText equal to password variable

}

// Generating Password
function generatePassword() {
  
  // Verifying password length
  if (parseInt(passwordLength) > 8 && parseInt(passwordLength) < 128) {
    var passwordArray = new Array(); // Array for final password
    var criteriaArray = new Array(); // Array to select random values based on user criteria
    // console.log(passwordArray.length);
    // console.log(criteriaArray.length);
  }

  if (charTypeLower === true) {
    passwordArray.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
    criteriaArray = criteriaArray.concat(lowercase);
    // console.log(passwordArray);
    // console.log(criteriaArray);
  }

  // Select random value from criteria arrays (lowercase, uppercase, numeric, and special) if user selected Yes (i.e. true boolean value) and add/concatenate array to criteriaArray
  if (charTypeUpper === true) {
    passwordArray.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    criteriaArray = criteriaArray.concat(uppercase);
    // console.log(passwordArray);
    // console.log(criteriaArray);
  }

  if (charTypeNumeric === true) {
    passwordArray.push(numeric[Math.floor(Math.random() * numeric.length)]);
    criteriaArray = criteriaArray.concat(numeric);
    // console.log(passwordArray);
    // console.log(criteriaArray);
  }

  if (charTypeSpecial === true) {
    passwordArray.push(special[Math.floor(Math.random() * special.length)]);
    criteriaArray = criteriaArray.concat(special);
    // console.log(passwordArray);
    // console.log(criteriaArray);
  }

  // Select random value from criteraArray and add to passwordArray until passwordLength requested by user is met
  for (var i = passwordArray.length; i < parseInt(passwordLength); i++) {
    passwordArray[i] = criteriaArray[Math.floor(Math.random() * criteriaArray.length)];
    // console.log(passwordArray);
  }

  // Have function return string value of passwordArray with no spaces (i.e. "" is the seperator for the join method)
  return passwordArray.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

