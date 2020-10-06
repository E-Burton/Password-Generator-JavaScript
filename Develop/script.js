// Assignment Code
var generateBtn = document.querySelector("#generate");

// Verifying password requirements to generate password
function generatePassword() {
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Password length must be at least 8 characters and no more than 128 characters.");
  } else {
    var passArray = Array.apply(null, Array(passwordLength));
    console.log(passArray.length);
  }
}

// Write password to the #password input
function writePassword() {
  // Prompts & variable declaration for password criteria
  alert("Select the criteria you would like for your password.");
  var passwordLength = prompt("What length is needed for you password? NOTE: Password length must be at least 8 characters and no more than 128 characters.");
  console.log(passwordLength);
  var charTypeLower = confirm("Would you like to include lowercase characters? (e.g. abcde)");
  console.log(charTypeLower);
  var charTypeUpper = confirm("Would you like to include uppercase characters? (e.g. ABCDE)");
  console.log(charTypeUpper);
  var charTypeNumeric = confirm("Would you like to include numeric characters? (e.g. 12345)");
  console.log(charTypeNumeric);
  var charTypeSpecial = confirm("Would you like to include special characters? (e.g. !, #, $, %, (, ), *, ;, @, [, ], {, }, &, ?)");
  console.log(charTypeSpecial);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
