// Assignment code here

var generatePassword = function () {

  var number = window.prompt("Choose a length of at least 8 characters and no more than 128 characters for your password.");
  if (number < 8 || number > 128) {
    window.alert("You did not pick a valid option, try again.");
    return;
  }

  // var passwordLower = window.confirm("Confirm whether or not to include lowercase characters.");
  // var passwordUpper = window.confirm("Confirm whether or not to include uppercase characters.");
  // var passwordNumber = window.confirm("Confirm whether or not to include number characters.");
  // var passwordSpecial = window.confirm("Confirm whether or not to include special characters.");

  // if (passwordUpper + passwordLower + passwordNumber + passwordSpecial === 0) {
  //   alert("Pleas select atleast one!")
  //   return;
  // }

  // prompt ask the character type to use
  var passwordPrompt = window.prompt(
    "What character types would you like to use? Enter as many as you want LOWERCASE, UPPERCASE, NUMBER, OR SPECIAL. HINT TYPE IN ORDER FROM LOWERCASE TO SPECIAL WITH SPACE IN BETWEEN AND NO COMMAS. FOR EXAMPLE: LOWERCASE UPPERCASE NUMBER"
  );


  passwordPrompt = passwordPrompt.toLowerCase();

  //uses switch case to choose what character types to use
  switch (passwordPrompt) {
    case 'lowercase':
      // parseFloat turns the numbers from a string to a a integer
      var length = parseFloat(number);
      charset = "abcdefghijklmnopqrstuvwxyz",
        retVal = "";
      // for loop chooses random letters and hoewever many letters as the length says 
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case 'uppercase':
      var length = parseFloat(number);
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case 'number':
      var length = parseFloat(number);
      charset = "0123456789",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case 'special':
      var length = parseFloat(number);
      charset = "!@#$%^&*(){}|;':<>?,./",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case 'lowercase uppercase number special':
      var length = parseFloat(number);
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567891234567890!@#$%^&*(){}|;':<>?,./",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case 'lowercase uppercase':
      var length = parseFloat(number);
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case 'lowercase number':
      var length = parseFloat(number);
      charset = "abcdefghijklmnopqrstuvwxyz01234567891234567890",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case 'lowercase special':
      var length = parseFloat(number);
      charset = "abcdefghijklmnopqrstuvwxyz!@#$%^&*(){}|;':<>?,./",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case 'uppercase number':
      var length = parseFloat(number);
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234567890",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case 'uppercase special':
      var length = parseFloat(number);
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){}|;':<>?,./",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case 'number special':
      var length = parseFloat(number);
      charset = "12345678901234567890!@#$%^&*(){}|;':<>?,./",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case 'lowercase uppercase number':
      var length = parseFloat(number);
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234567890",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case 'lowercase uppercase special':
      var length = parseFloat(number);
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){}|;':<>?,./",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case 'lowercase number special':
      var length = parseFloat(number);
      charset = "abcdefghijklmnopqrstuvwxyz12345678901234567890!@#$%^&*(){}|;':<>?,./!@#$%^&",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case 'uppercase number special':
      var length = parseFloat(number);
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234567890!@#$%^&*(){}|;':<>?,./",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    default:
      window.alert('You did not pick a valid option. Try again.');

      passwordPrompt();
      break;
  }// end of switch statement
}// end of generatePassword function


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
