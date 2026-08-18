//8. take the alphabet and check weather its between a-n or o-z

function checkAl(char){
    let pC = char.toLowerCase();
    console.log(pC)

    if (pC>96 &&pC<=111) {
        console.log("a-o")
    } else if(pC>111 && pC<=122){
        console.log("o-z")
    }else{
        console.log("please enter character in b/w string symbols or correct the argument")
    }
}
checkAl("d")
// checkAl("G")