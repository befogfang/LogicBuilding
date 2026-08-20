//Check if a number is a multiple of 7 or ends with 7. 

function checkSeven(num){
    let lastDigit =(num.toString().slice('').length-1)
    
    switch (true) {
        case ((num %7 ==0) && (lastDigit == 7)) :
            console.log(num +"number ends and divisible by 7")
            break;
        case (num %7 ==0 ) :
            console.log(num +"number is divible by 7")
            break;
        case (lastDigit==7 ) :
            console.log(num +"ends with 7 only")
            break;
            
            default:
                console.log(num +"Pass")
                break;
    }
}

checkSeven(77) //ends with 7 and divisible by 7
checkSeven(7) //divisible by 7 and ends with 7
checkSeven(35) //divisible by 7
checkSeven(30) //divisible by 7