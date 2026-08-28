//Take a password string and check basic rules (length $\ge$ 8 and contains at least one digit).  

function checkpassword(password) {

    checkPWlength(password)

    function instructions() {
        console.log( "follow the instructions");   
    }

    //check password length
    function checkPWlength(password) {
        let pwSlen = password.length ;
        (pwSlen>7)?checkForCharacters(password):instructions()
    }
    function checkForCharacters(password) {
        let pString = password.toString().split('')
        pString.forEach(c=> {
            let asC = c.charCodeAt(0);
            if (asC>=65&&asC<90) {
                console.log("it has upper case ")
            }else if (asC>=97&&asC<123) {
                console.log("it has lower case ")
            }  else if (asC>=48&&asC<57) {
                console.log("it has digits ")
            }  else{
                
            }
        });
    }
    
}

checkpassword("13423586")
// checkpassword("123458495236")
// checkpassword("1234586asdf")
// checkpassword("1234586@##asdf")
// checkpassword("1##asdf")
// checkpassword("1234566##asdf")
// checkpassword("1##f")