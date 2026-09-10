// Count the number of digits in a given number.  
function countTheDigit(number) {
    let dLength = number.toString().length
    console.log( dLength)
}
// countTheDigit(34324)

// Print the reverse of a given number.  
function reverseNumber(number) {
    let r =parseFloat(number.toString().split('').reverse().join(''))*Math.sign(number)  //doing it using string then reversing then converitng it back to the number
    console.log(r)
}
// reverseNumber(-342342)

// Check if a number is a palindrome.  

/** number in reverse equal to the number then its a palindrome */
let checkPalindrome =(num) =>{
    let revNum=   parseFloat((num.toString().split('').reverse().join(''))*Math.sign(num));
    (revNum ==num)?console.log("palindorme"):console.log("not a palindrome");

}
// checkPalindrome(23432)

// Find the sum of digits of a number.  
function sumOfDigit(num) {
    let nums = num.toString().split('')
    let sum= 0;
    nums.forEach(n => {
        sum += Number(n);
    });
    return sum;

}
// console.log(`sum of digit of number you entered is ${sumOfDigit(7688)}`)

// Check if a number is an Armstrong number.  
/**number that equals the sum of its own digits each raised to the power of the total number of digits
 * 345 =3^3+4*3+5*3 if it was correct then 345 would be an armstrong number
 */
function checkArmstrong(num){
    let nuLength = num.toString().length;
    let sum =0;
    let numArray = num.toString().split('');
    numArray.forEach(n =>{
        sum+=Number( Math.pow(n,nuLength))
    })
    console.log(sum)
        if(sum==num){console.log("arsmtrong number")}else{console.log("not a Arsmtrong Number")}
}
// checkArmstrong(111)
// checkArmstrong(153)
// Check if a number is a perfect number.  
/**
 * , a perfect number is a positive integer that is equal to the sum of its positive proper divisors, that is, divisors excluding the number itself
 */
function perfectNumber(num) {
        let dArr =[]
        let nSum = 0;
        let i=1;
        do {
            nSum+=i
            dArr.push(i)
            i++;
            console.log(dArr)
        } while (num%i==0);

        console.log(nSum)
        if(nSum==num){console.log("yes")}else{console.log("no")};
        
}
perfectNumber(6)
// Print all prime numbers between 1 and 100.  

// Check if a number is prime or not.  

// Print Fibonacci series up to n terms.  

// Print sum of first n terms of Fibonacci series.