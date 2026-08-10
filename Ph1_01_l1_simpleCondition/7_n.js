// take three number and print the largest number

function largerInThree(a,b,c) {
if (a<b && b< c ) {
    console.log("largest is" + c)
} else if( a<b && b> c){
    console.log("largest is" + b)
}else if(a<c && b<a){
    console.log("largest is" + a)
} 


}

largerInThree(9987,416,69)
largerInThree(97,99990,-69)
largerInThree(9987,46,9969)