//Take a character and check if it is a letter, a digit, or neither.  

/**
 * asci methode 
 * letter - a-z and A-Z
 * digit - 0-9 
 * niether - everything else
 */

function whatChar(character) {
    // console.log(character.length)
    if (character.toString().length==1) {
        let char = character.toString()
        let tchar=char.charCodeAt(0)
        if (tchar>=46 && tchar<=57) {
            console.log(character.toString()+ " digit" )
            
        } else if(tchar>=65 && tchar<=90 ){
            console.log(character.toString()+ " alphabet")
            
        }else if( tchar>=97 && tchar<=122 ){
            console.log(character.toString()+ " alphabet")
            
        }{
            console.log("neither a alphabet nor a digit")
        }
        
    }else{
        console.log("work on single character as input")
    }
}

let j = "23424sfas"

whatChar(j) // here j is not defined , this place is for parameters
whatChar("4")
whatChar("b")
whatChar("@")
whatChar(23)