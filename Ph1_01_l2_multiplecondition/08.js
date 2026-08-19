//8. take the alphabet and check weather its between a-n or o-z

function checkAl(char){
    let pC = char.toLowerCase();
    let apc = pC.charCodeAt(0)
    console.log(pC)

    if (apc>96 &&apc<=111) {
        console.log("a-o")
    } else if(apc>111 && apc<=122){
        console.log("o-z")
    }else{
        console.log("please enter character in b/w string symbols or correct the argument")
    }
}
checkAl("v")
// checkAl("G")