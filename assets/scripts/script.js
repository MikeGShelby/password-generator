// Alphanumeric arrays for criteria selection
const lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const numberArray = ['0','1','2','3','4','5','6','7','8','9']
const symbolArray = ['!','@','#','$','%','^','&','*','(',')','_','+','>','<',':','{','}','[',']']

function generatePassword (event) {
  event.preventDefault()

  // var chars = lowerCaseArray;
  var chars = [];

  var password = "";

  const passwordLength = document.getElementById("password-length").innerHTML;
  console.log(passwordLength);

  // Add lowercase array if lowercase toggle is selected
  const includeLowerCase = document.getElementById("include-lowercase");
    if(includeLowerCase.checked==true) {
      console.log("include lower case");
      var chars = chars.concat(lowerCaseArray);
    } else {
      console.log("do NOT include lower case");
    }

  // Add uppercase array if uppercase toggle is selected
  const includeUpperCase = document.getElementById("include-uppercase");
    if(includeUpperCase.checked==true) {
      console.log("include upper case");
      var chars = chars.concat(upperCaseArray);
    } else {
      console.log("do NOT include upper case");
    }

  // Add number array if number toggle is selected
  const includeNumbers = document.getElementById("include-numbers");
    if(includeNumbers.checked==true) {
      console.log("include numbers");
      var chars = chars.concat(numberArray);
    } else {
      console.log("do NOT include numbers");
    }

  // Add number array if number toggle is selected
  const includeSymbols = document.getElementById("include-symbols");
    if(includeSymbols.checked==true) {
      console.log("include symbols");
      var chars = chars.concat(symbolArray);
    } else {
      console.log("do NOT include symbols");
    }

  // loop through random array items to generate password
  for (let i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);

    password += chars[randomNumber]
  }

  // if no inclusion criteria is selected, then alert the user and do not display any text in password text section
  if(includeLowerCase.checked==false && includeUpperCase.checked==false && includeNumbers.checked==false && includeSymbols.checked==false ) {
    console.log("you must select at least one password criteria to include");
    window.alert("You must select at least one criteria to include in your password");
    passwordText.textContent = "";
   } else {
    passwordText.textContent = password;
   }
}

// Get references to the #password element
var passwordText = document.querySelector("#password");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button. Run tests
generateBtn.addEventListener("click", generatePassword);












