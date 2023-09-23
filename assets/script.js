// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var userChoices = [];
var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["@","!","#","$","%","^","&","*","(",")","_","-","+","=","<",">",";",":","'",];
var characterCodes = Array.from(Array(26)).map( (_, i) => i + 97);
var lowerCaseLetters = characterCodes.map(code => String.fromCharCode(code));
var upperCaseLetters = lowerCaseLetters.map(letter => letter.toUpperCase())
// to avoid writing it out

// starting point
function generatePassword(){
    passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
    console.log("Password length " + passwordLength);

    if(!passwordLength) {
        alert("Required value");

      } else if (passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt("You must choose between 8 and 128");
        console.log("Password length " + passwordLength);
      
      } else { 
        lowerCaseLetters = confirm("Will this contain lower case letters?");
        console.log("Lower case " + lowerCaseLetters);

        upperCaseLetters = confirm("Will this contain upper case letters?");
        console.log("Upper case " + upperCaseLetters);

        numbers = confirm("Will this contain numbers?");
        console.log("Number " + numbers);

        symbols = confirm("Will this contain special characters?");
        console.log("Special Character " + symbols);
    
      };
    
    
    if (!lowerCaseLetters && !upperCaseLetters && !numbers && !symbols) {
        userChoices = alert("You must choose a criteria");
     
      } else if (lowerCaseLetters && upperCaseLetters && numbers && symbols) {
        // userChoices = lowerCaseLetters.concat(upperCaseLetters, numbers, symbols);
        console.log(userChoices);
      }
      else if (lowerCaseLetters && upperCaseLetters && numbers) {
        userChoices = lowerCaseLetters.concat(upperCaseLetters, numbers);
        console.log(userChoices);
      }
      else if (lowerCaseLetters && upperCaseLetters && symbols) {
        userChoices = lowerCaseLetters.concat(upperCaseLetters, symbols);
        console.log(userChoices);
      }
      else if (lowerCaseLetters && numbers && symbols) {
        userChoices = lowerCaseLetters.concat(numbers, symbols);
        console.log(userChoices);
      }
      else if (upperCaseLetters && numbers && symbols) {
        userChoices = upperCaseLetters.concat(numbers, symbols);
        console.log(userChoices);
      }
      
      else if (lowerCaseLetters && upperCaseLetters) {
        userChoices = lowerCaseLetters.concat(upperCaseLetters);
        console.log(userChoices);
      }
      else if (lowerCaseLetters && numbers) {
        userChoices = lowerCaseLetters.concat(numbers);
        console.log(userChoices);
      }
      else if (lowerCaseLetters && symbols) {
        userChoices = lowerCaseLetters.concat(symbols);
        console.log(userChoices);
      }
      else if (upperCaseLetters && numbers) {
        userChoices = upperCaseLetters.concat(numbers);
        console.log(userChoices);
      }
      else if (upperCaseLetters && symbols) {
        userChoices = upperCaseLetters.concat(symbols);
        console.log(userChoices);
      }
      else if (numbers && symbols) {
        userChoices = numbers.concat(symbols);
        console.log(userChoices);
      }
      
      else if (lowerCaseLetters) {
        userChoices = lowerCaseLetters;
        console.log(userChoices);
      }
      else if (upperCaseLetters) {
        userChoices = upperCaseLetters;
        console.log(userChoices);
      }
      else if (numbers) {
        userChoices = numbers;
        console.log(userChoices);
      }
      else if (symbols) {
        userChoices = symbols;
        console.log(userChoices);
      };
    //   var passwordBlank = [];
  
      // Loop for random selection
      for (var i = 0; i < passwordLength; i++) {
        var allChoices = userChoices[Math.floor(Math.random() * passwordLength)];
        console.log(allChoices);
      }
    
      // Join and return the password 
      var password =("");
      console.log("Your Pasword is: " + password);
      return password;
    }