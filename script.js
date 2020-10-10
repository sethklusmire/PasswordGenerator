// I kept much of my code lines that I started with to show where I started and where I ended up.
function generatePassword() {
  // for example, I used this line to generate the password without alerts. Once I put in the alerts I realized I had to split up my variables.
  // var length = Math.floor(Math.random() * 120) + 8;

  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  var retVal = "";
  var charset = "";

  var passwordlengthinvalid = true;
  // The while loop here is to make sure the user putting in the input uses a correct value, 8-128. I give the option of 32 because thats what I use for many of my passwords.
// I used a parseInt to turn length string into a numeric value and not a string value.
  while (passwordlengthinvalid) {
    var lengthString = prompt("Enter password length (8-128)", "32");
    var lengthNum = parseInt(lengthString);
    // isNan is a function I looked up. I wanted it here because if the user puts in something that isnt a numeric value, the generator took it but then would come up with nothing. This is there to shoot you back to the start if you write in "password" or any other word.
    if (isNaN(lengthNum)) {
      passwordlengthinvalid = true
    } else if (lengthNum > 128) {
      passwordlengthinvalid = true
    } else if (lengthNum < 8) {
      passwordlengthinvalid = true
    } else {
      passwordlengthinvalid = false
    }
  }

  if (prompt("Confirm if you'd like special characters.", "yes")) {
    charset += special;
  }
  if (prompt("Confirm if you'd like uppercase characters.", "yes")) {
    charset += caps;
  }
  if (prompt("Confirm if you'd like numerical characters.", "yes")) {
    charset += numeric;
  }
  if (prompt("Confirm if you'd like lowercase characters.", "yes")) {
    charset += alpha;
  }
// Again kept my original code. Why not. I split everything up but then thought it was too wordy. Found a way to make it one line.
  for (var i = 0; i < lengthNum; ++i) {
    // var randomAlphaIndex = Math.floor(Math.random() * alpha.length);
    // var randomCapsIndex = Math.floor(Math.random() * caps.length);
    // var randomNumericIndex = Math.floor(Math.random() * numeric.length);
    // var randomSpecialIndex = Math.floor(Math.random() * special.length);
    var charsetIndex = Math.floor(Math.random() * charset.length);

    // retVal += alpha.charAt(randomAlphaIndex);
    // retVal += caps.charAt(randomCapsIndex);
    // retVal += numeric.charAt(randomNumericIndex);
    // retVal += special.charAt(randomSpecialIndex);
    retVal += charset.charAt(charsetIndex);
  }
  return retVal;
}
// And this is garbage! I was messing around with how to put the prompts in and nothing was working. I commented it out and never used it. Again I just wanted to keep it to maybe show my thought process.
// var specChar = prompt("Confirm if you'd like special characters.")
// if (special) {

// } else {

// }

// var numChar = prompt("Confirm if you'd like numerical characters.")
// if (numChar = numeric) {

// } else {

// }

// var lowChar = prompt("Confirm if you'd like lowercase characters.")
// if (lowChar = alpha) {

// } else {

// }

// var upChar = prompt("Confirm if you'd like uppercase characters.")
// if (upChar = caps) {

// } else {

// }

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
