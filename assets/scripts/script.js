// Alphanumeric arrays for criteria selection
const lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const NumberArray = ['0','1','2','3','4','5','6','7','8','9']
const SymbolArray = ['!','@','#','$','%','^','&','*','(',')','_','+','>','<',':','{','}','[',']']

// Function will prompt user to select password criteria
function criteriaSelect() {
    var passwordLength = window.prompt("Please enter a password length between 8 and 128 characters");
      if (passwordLength < 8 || passwordLength >128) {
        // Alert user if out-of-range number is entered
        window.alert("Password must be between 8 and 128 characters");
        criteriaSelect();
      }

    var includeUppercase = window.confirm("Include uppercase letters in your password");

    var includeNumbers = window.confirm("Include numbers in your password");

    var includeSymbols = window.confirm("Include symbols in your password");

    generatePassword(passwordLength, includeUppercase, includeNumbers, includeSymbols);
}

// Function will generate a password based on selected criteria
function generatePassword (passwordLength, includeUppercase, includeNumbers, includeSymbols) {
    var chars = lowerCaseArray

    // if uppercase characters are selected, then include in password
    if (includeUppercase) {
      var chars = chars.concat(upperCaseArray);
    }
    // if numbers are selected, then include in password
    if (includeNumbers) {
      var chars = chars.concat(NumberArray);
    }
    // if symbols are selected, then include in password
    if (includeSymbols) {
      var chars = chars.concat(SymbolArray);
    }

    var password = "";

    // loop through random array items to generate password
    for (let i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);

      password += chars[randomNumber]
    }
  passwordText.textContent = password;
}


// Get references to the #password element
var passwordText = document.querySelector("#password");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", criteriaSelect);









