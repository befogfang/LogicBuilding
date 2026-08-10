// take two number and print larger one


function largerOfTwo(a,b) {
    let midValue = a+b;
    if ( b> midValue) {
        console.log(b +" is larger amoung " + a +"and" +b)
    } else {
        console.log(b + " is larger amoung" + a +"and" + b)
    }
}

largerOfTwo(89,22);
largerOfTwo(89,222);
largerOfTwo(-6,2);