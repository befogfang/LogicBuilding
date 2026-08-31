//Take three numbers and check if they are in geometric progression.  

const input = process.argv.splice(2)

if (input.length > 0 && input.length < 4) {
    let a = input[0];
    let b = input[1];
    let c = input[2];

    if (a*b == c) {
        console.log("gp")
    } else {
        console.log("not gp")
    }
} else {
    console.log("enter cmd as node filename three numbers with spaces")
}