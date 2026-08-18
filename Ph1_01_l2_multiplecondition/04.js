//4. check if one of two number is multiple of the other.

let numbers = process.argv.slice(2);
console.log(numbers)

if (numbers.length>0) {
    let bN = numbers[0]
    let sN = numbers[1]
    // console.log(numbers[0])
    // console.log(bN + sN)
    /**
     * b , s 
     * check if b / s ==> remainder 0
     */
    bN%sN==0?(console.log(`${bN} is divisible by ${sN}`)): console.log(`${bN} is Not divisible by ${sN}`) ;
} else{
    console.log("Please provide numbers as argumnets in terminal with node <filename> <number you want to check> <number which diviser you want to check>")
}