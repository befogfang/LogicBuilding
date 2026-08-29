//Take a password passwording and check basic rules (length $\ge$ 8 and contains at least one digit).  

function checkpassword(password) {

    checkPWlength(password)

    function inpassworductions() {
        console.log("follow the inpassworductions");
    }

    //check password length
    function checkPWlength(password) {
        let pwSlen = password.length;
        (pwSlen > 7) ? checkForCharacters(password) : inpassworductions()
    }

    function checkForCharacters(password) {

        const hasLetter = /[a-zA-Z]/.test(password);
        const hasDigit = /[0-9]/.test(password);
        const hasSymbol = /[^a-zA-Z0-9\s]/.test(password);

        if (hasLetter && hasDigit && hasSymbol) {
            console.log("Contains letters, digits, and symbols");
            checkConq(password)
        } else {
            inpassworductions()
        }
    }

    function checkConq(password) {
    
// No 3+ identical chars in a row
function hasRepeated(password) {
  return /(.)\1\1/.test(password);
}

// No 3+ sequential chars (abc, 123, cba, 321, ...)
function hasSequential(password) {
  for (let i = 0; i < password.length - 2; i++) {
    const a = password.charCodeAt(i);
    const b = password.charCodeAt(i + 1);
    const c = password.charCodeAt(i + 2);
    if ((b - a === 1 && c - b === 1) || (a - b === 1 && b - c === 1))
      return true;
  }
  return false;
}

if (hasRepeated(password) || hasSequential(password)) {
  console.log("Invalid: cann't used as the password as contains consecutive characters");
} else {
  console.log("Valid and u can use this password , pls save this password somewhere carefully");
}   

}
}

checkpassword("1Abc@df586")
// checkpassword("123458495236")
// checkpassword("1234586asdf")
// checkpassword("1234586@##asdf")
// checkpassword("1##asdf")
// checkpassword("1234566##asdf")
// checkpassword("1##f")