// Take a number and print "Fizz" if divisible by 3, "Buzz" if divisible by 5, and "FizzBuzz" if divisible by both.

function FizzBuzz(num) {
    if (num%3==0 && num%5==0) {
        return "finbuzz"
    } else if (num%3==0) {
        return "fin"
    } else if (num%5 ==0) {
        return "buzz"
    } else{
        return "fuzzz"
    }
}
console.log(FizzBuzz(33))
console.log(FizzBuzz(3))
console.log(FizzBuzz(5))
console.log(FizzBuzz(30))
console.log(FizzBuzz("asds"))