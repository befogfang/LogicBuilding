//Take an integer (1–9999) and check if the sum of its digits is greater than the product of its digits.  
function svp(num) {
    if (num>0 &&num<10000) {
        let a = Math.floor(num/1000)
        let b = Math.floor((num%1000)/100)
        let c = Math.floor((num%100)/10)
        let d= Math.floor((num%10))
        if ((a+b+c+d) > (a*b*c*d)) {
            return "yeas ,, it is"
        }else{return "not"}
        // console.log(`${a} +${b} +${c} +${d} `)
    }else{console.log("enter number btween 1 and 9999 only")}
}

// console.log(svp(34344))
// console.log(svp(94344))
console.log(svp(9044))
// console.log(svp(44))
// console.log(svp(04))