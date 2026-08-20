//Take a 3-digit number and check if all digits are distinct.  

const numbers = process.argv.slice(2)

if (numbers.length>0) {
    
    //string to number
    //logic such checks all digit are different

    let nNF = Number(numbers[0]).toString().split('')
    // console.log(typeof(numbers))
    // console.log(typeof(numbers[0]))
    console.log(typeof(nNF))
    // let nNS = Math.floor(numbers.toString()/10) - nNT
    // let nNT = Math.floor(numbers.toString()/1)
    // console.log(`${nNF} ${nNS} ${nNT}`)

    if ((nNF[0]==nNF[1])&&(nNF[1]==nNF[2])) {
        console.log("every digit in your number is same")
    }else if((nNF[0]==nNF[1])||(nNF[1]==nNF[2])||(nNF[0]==nNF[2])){
        console.log("not all are same digits")
    }
    else {
        console.log("every digit is distinct")
    }

    
    // console.log(nNF)

} else {
    console.log("enter the three numbers such 'node <filename> <three-digit-number>' ")
}
