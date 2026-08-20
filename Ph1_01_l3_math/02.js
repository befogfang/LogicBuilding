//Take a 3-digit number and determine if the middle digit is the largest, smallest, or neither.  

const numbers = process.argv.slice(2)

if (numbers.length>0) {
    

    let nNF = numbers[0].toString().split('')
   
    // console.log(nNF)
    // console.log(nNF[1])

    let biggest = Number(Math.max(...nNF))  // cannt directly get all the values , need to use ...
    console.log(biggest) //nan is number 
    console.log(typeof(biggest)) //number
    
    let smallest = Number(Math.min(...nNF))
    console.log(smallest) //nan
    console.log(typeof(smallest)) //number

    if(Number(nNF[1]) == smallest){
        console.log(`${nNF[1]} is middle digit and smallest amoung all`)
    }else{
        console.log(`${nNF[1]} is neithe larget nor smallest amoung all three digit of the number`)
    }



    
} else {
    console.log("enter the three numbers such 'node <filename> <three-digit-number>' ")
}
