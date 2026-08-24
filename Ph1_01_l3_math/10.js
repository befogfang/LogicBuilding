//Check whether a number is a perfect square (without using the square root function).

function sqrRoot(number) {
    let num = 1;
    do {
        if(num*num==number){
            return num;
        }
        num = num+1;
    } while (num*num <= number);
    
}

console.log(sqrRoot(25))

console.log(sqrRoot(400))


// 