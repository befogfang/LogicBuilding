//7. take two number and check weather both is odd / even , one is odd or other is even

const numbers = process.argv.slice(2)

if (numbers.length>0) {
    // let fn = numbers[0]
    // let sn = numbers[1]

    console.log(typeof(numbers))
    let aOdd=[]
    let aEven=[]
    
    numbers.forEach(n => {    //here everything is converting in the string ..
        // console.log( typeof(n)) //string 

        let num = Number(n)

        if (n%2==0) {
             aEven.push(n) ;
            
        }else{
            aOdd.push(n) ;
            console.log(aOdd)
           
        }
           
        // console.log(`odd - ${aOdd} even -${aEven}`)
    });
    
    console.log(`odd - ${aOdd} even - ${aEven}`)
    
} else {
    console.log("please enter the numbers as 'node <filename> 1n 2n ' ")
}



// function hcoe (a,b){
//     let aOdd =[];
//     let aEven =[];

//     if () {
        
//     }

// }

// hcoe(8,9)