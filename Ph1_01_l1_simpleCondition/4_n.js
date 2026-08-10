// check if number is divided by 3 & 5

function isDivisibleBy3And5Both(number) {
    if (number%3 == 0 && number%5 ==0 ) {
        console.log("number is divisible by both 3 and 5")
    }else {
        console.log("this nomvber is not by both 3 and 5")
    }
}

isDivisibleBy3And5Both(15)
isDivisibleBy3And5Both(5)
isDivisibleBy3And5Both(25)