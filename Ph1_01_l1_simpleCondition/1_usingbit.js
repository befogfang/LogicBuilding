// take a number and print if its negative , positive or zero 

/**
 * js uses 32 bit operand
 * means - 2 --> 10 --> 00000000000000000000000000000010 
 * 
 * 11111111111111111111111111111010  --> -6 
 * 
 * 1111 1111 1111 1111 1111 1111 1111 1010 
 * 
 * msb is 1 --> its negative as,
 * first bit is for sign - rest 31 is for the bit for describe the number
 * 
 * to decode -->
 *  flip all bits 0000 0000 0000 0000 0000 0000 0000 0101
 *  add 1 
 * 0000 0000 0000 0000 0000 0000 0000 0101 + 1 =
 * 0000 0000 0000 0000 0000 0000 0000 0110 --> 110
 * 
 * msb is 1 so its -6
 * 
 * 
 * here in this problemm
 * 
 * 
 */
function checknNumber(num){
    let msb = num >>31
    if(num === 0){
        console.log(num+" is Zero")
    } else if (msb == -1){
        console.log(msb)
        console.log(num+" is negative number")
    }else if(msb==0){
        console.log(num+" is postive number")
    } else{
        console.log("this is not a number")
    }
}

checknNumber(-9);
checknNumber(9);
// checknNumber("a");  /** this is not clear to me at this moment of time */
checknNumber(9-9);