//Take a 4-digit number and check if the first and last digits are equal.  

function check4dn(num){

    console.log(num)

    let numArray = num.toString().split('')
    // console.log(typeof(numArray))
    // console.log(numArray)

    if (numArray[0]==numArray[3]){
        console.log("first and 4rth digit of the number is same")
    }else{
        console.log("not same")
    }

}

check4dn(9879)  // this need to be a 4 digit number
check4dn(9800)  // this need to be a 4 digit number