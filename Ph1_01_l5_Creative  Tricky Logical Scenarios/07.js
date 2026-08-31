//Take a 3-digit number and check if the sum of the first and last digit equals the middle digit.  

function checkThreeDigitNumber(num) {
    let numToString = num.toString()
    // console.log(numToString)
    if(numToString.length!=3){return 0};
    
    if (Number(numToString[0])+Number(numToString[2])==Number(numToString[1])) {
        console.log(`affirmative for  ${numToString}`)
    }

}
checkThreeDigitNumber(58)
checkThreeDigitNumber(5813)
checkThreeDigitNumber(121)