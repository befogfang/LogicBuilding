//Check whether a given integer is single-digit, double-digit, or multi-digit.

const number = process.argv.slice(2)

if(number.length == 1){

    // console.log("hi")
    let pNum = number.toString().length
    
    if (pNum ==1) {
        console.log("thid number has one digit")
    } else if(pNum==2){
        console.log("thid number has two digit")
        
    } else if(pNum==3){
        console.log("thid number has three digit")
        
    } else{
        console.log(`multidigit number`)
    }


}else { console.log('plese enter the input in terminal as node <filename> <one number of any number of digit but limit of js>')}