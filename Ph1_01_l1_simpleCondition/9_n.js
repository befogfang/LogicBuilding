// take a character & check if its a vowel or consonent
/**
 * using ascii value is more easier and understandable
 */

function vowelOrConsonent(c) {
    let vowel = ["a","e","i","o","u"]
    let lC= c.toString().toLowerCase()
    if(vowel.includes(lC)){
        console.log("vowel")
    }else if(/[/d]/){
    console.log("digit")
    }else if(/[^a-zA-Z/s/D]/){
        console.log("symbol")
    }
}

vowelOrConsonent(6)
vowelOrConsonent("b")
vowelOrConsonent("V")
vowelOrConsonent("e")
vowelOrConsonent("E")
vowelOrConsonent(".")
vowelOrConsonent(987)