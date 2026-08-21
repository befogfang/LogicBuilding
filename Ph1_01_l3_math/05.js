//Check if a number is a multiple of 7 or ends with 7. 

function checkSeven(num){
    let numArray =num.toString().split('')
    let lastDigit = Number(numArray[numArray.length-1])
    // console.log(lastDigit)    
    // console.log(typeof(lastDigit))    
    if (num%7==0) {
        (lastDigit==7)?
        console.log(num +" ends and divisible by 7"):
        console.log(num +" is divisible by 7")
    } else {
        (lastDigit==7)?
        console.log(num +" ends with 7 only"):
        console.log(num +" Pass")
    }

}

checkSeven(77) //ends with 7 and divisible by 7
// checkSeven(0) //divisible by 7 and ends with 7
// checkSeven(7) //divisible by 7 and ends with 7
// checkSeven(35) //divisible by 7
// checkSeven(30) //divisible by 7