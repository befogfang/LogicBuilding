// Print numbers from 1 to 10.
for (let i = 0; i <=10; i++) {
  console.log(i);
  
}
// Print all even numbers between 1 and 100.
for(let e = 0 ; e<=100 ; e+=2){
  console.log(e)
}
// Print all odd numbers between 1 and 100.
for(let o = 1 ; o<=100 ; o+=2){
  console.log(o)
}
// Print numbers from 10 down to 1.
for(let r = 10 ; r>=1 ; r-=1){    //was blunder
  console.log(r)
}
// Print the table of a given number ($n \times 1$ to $n \times 10$).
function printTable(t) {
  console.log(`table of ${t}`)
  for(let j =1; j<=10 ; j++){
    console.log(`${t} times ${j} is equal to ${t*j}`)
  }
}
printTable(4)
//   Print the sum of first n natural numbers.
function sumOfFirstNInteger(m) {
  let sum =0;
  for (let i = 0; i <= m; i++) {
     sum +=i ;
    }
    console.log(`${sum} is sum for first ${m} Natural Numbers`)
}
sumOfFirstNInteger(100)
//   Print the sum of all even numbers up to n.
function sumEvenToN(sN) {
  let sum = 0;
  for(let i  = 0 ; i <=sN ; i+=2){
     sum+=i;
  }
  console.log(`sum of all even number upto ${sN} is ${sum}`)
}
sumEvenToN(100)
//   Print the sum of all odd numbers up to n.
function sumOddToN(sN) {
  let sum =0;
for(let i =1 ; i<=sN;i+=2){
  sum+=i;
}
console.log(`sum of all odd number upto ${sN} is ${sum}`)
  
}
sumOddToN(100)
//   Print the factorial of a given number.
function factorial(n) {
  let f = 1;
for(let i =n ; i>=1 ; i-=1){
  f *=i ;
}
  console.log(f)
}
factorial(4)
  // Print the product of digits of a given number.   //worth practicing questions like this
function productOfDigits(num) {
  // console.log(num)
  let product  =1;
for(let n=num ; n>0 ; n=Math.floor(n/10)){
  product *=n%10;
}
console.log(`${product}`)
}
productOfDigits(876)
