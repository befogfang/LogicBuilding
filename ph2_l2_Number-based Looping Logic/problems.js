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
    parseFloat(
       num.toString 
    )
}

// Check if a number is an Armstrong number.  

// Check if a number is a perfect number.  

// Print all prime numbers between 1 and 100.  

// Check if a number is prime or not.  

// Print Fibonacci series up to n terms.  

// Print sum of first n terms of Fibonacci series.