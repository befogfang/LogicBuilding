//Take three numbers and check if they are in arithmetic progression.  

const input = process.argv.splice(2)

if (input.length >0 && input.length <4) {
    let a= input[0];
    let b= input[1];
    let c= input[2];

    let commonDifference;
    if ((b-a)==(c-b)) {
        console.log("ap with common difference "+ (b-a)+ "as ap sequence is "+ a,b ,c )
    }
    // else if ((a-b)==(b-c)) {
    //     console.log("ap with common difference "+ (a-b)+"as ap sequence is "+ b,a ,c)
    // }else if ((a-c)==(c-b)) {
    //     console.log("ap with common difference "+ (a-c)+"as ap sequence is "+ c,a ,b )
    // }
    else {
        console.log("not ap")
    }
}else{
    console.log("enter cmd as node filename three numbers with spaces")
}