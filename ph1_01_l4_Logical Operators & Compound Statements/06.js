// Take two numbers and check if both are positive and their sum is less than 100. 
 

let checkNumbers = (a,b) =>{
    (a>0&&b>0)?((a+b<100)?console.log("yeahh"):console.log("positive but its not smaller than 100")):console.log("number must be positive")
}
checkNumbers(55,6)