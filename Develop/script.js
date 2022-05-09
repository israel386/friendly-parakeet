// Assignment code here

var generatePassword = function () {

  var number = window.prompt("Choose a length of at least 8 characters and no more than 128 characters for your password.");
  if (number < 8 || number > 128) {
    window.alert("You did not pick a valid option, try again.");
    return;
  }

  var passwordLower = window.confirm("Confirm whether or not to include lowercase characters.");
  var passwordUpper = window.confirm("Confirm whether or not to include uppercase characters.");
  var passwordNumber = window.confirm("Confirm whether or not to include number characters.");
  var passwordSpecial = window.confirm("Confirm whether or not to include special characters.");

  if (passwordUpper + passwordLower + passwordNumber + passwordSpecial === 0) {
    alert("Pleas select atleast one!")
    return;
  }


  //uses switch case to choose what character types to use
  switch (passwordLower, passwordUpper, passwordNumber, passwordSpecial) {
    case true, false, false, false:
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
    case false, true, false, false:
      var length = parseFloat(number);
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case false, false, true, false:
      var length = parseFloat(number);
      charset = "0123456789",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case false, false, false, true:
      var length = parseFloat(number);
      charset = "!@#$%^&*(){}|;':<>?,./",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case true, true, true, true:
      var length = parseFloat(number);
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567891234567890!@#$%^&*(){}|;':<>?,./",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case true, true, false, false:
      var length = parseFloat(number);
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case true, false, true, false:
      var length = parseFloat(number);
      charset = "abcdefghijklmnopqrstuvwxyz01234567891234567890",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case true, false, false, true:
      var length = parseFloat(number);
      charset = "abcdefghijklmnopqrstuvwxyz!@#$%^&*(){}|;':<>?,./",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case false, true, true, false:
      var length = parseFloat(number);
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234567890",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case false, true, false, true:
      var length = parseFloat(number);
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){}|;':<>?,./",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case false, false, true, true:
      var length = parseFloat(number);
      charset = "12345678901234567890!@#$%^&*(){}|;':<>?,./",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case true, true, true, false:
      var length = parseFloat(number);
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234567890",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case true, true, false, true:
      var length = parseFloat(number);
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){}|;':<>?,./",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case true, false, true, true:
      var length = parseFloat(number);
      charset = "abcdefghijklmnopqrstuvwxyz12345678901234567890!@#$%^&*(){}|;':<>?,./!@#$%^&",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
    case false, true, true, true:
      var length = parseFloat(number);
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234567890!@#$%^&*(){}|;':<>?,./",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
      break;
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
