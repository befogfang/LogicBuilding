// take three number and print the largest number

function largerInThree(a,b,c) {
if (a<c && b< c  ) {
    console.log("largest is " + c)
} else if( a<b && c<b ) {
    console.log("largest is " + b)
}else if(c<a && b<a ){
    console.log("largest is " + a)
} else{
    console.log("the fun has to be more brainstromed")
}


}

largerInThree(9987,416,69)
largerInThree(97,99990,-69)
largerInThree(9987,46,9969)