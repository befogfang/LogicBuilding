//    Take electricity units consumed and calculate the bill as per slabs (using if-else). 


function calcuteBill(bill){

if (bill>0 && bill<=200) {
    return "free"
} else if (bill>200 && bill<=300) {
    return bill*8
} else if (bill>300 && bill<=600) {
    return bill*10
} else if (bill>600 ) {
    return bill*20
} else {
    return "something wrong, connect to your service provider"
}

}
console.log(`ur bill is `+calcuteBill(300))