//Take three numbers and print the median value (neither maximum nor minimum).

/**
 * mean - avg
 * median -  number nearer to middle aafter soring feither accending or deccending
 * mode - repeaating more time
 */

const numbers = process.argv.slice (2)

// if(numbers.length>0 && numbers.length<4){
if(numbers.length>0 ){
    console.log(typeof(numbers.toString()))
    console.log(numbers.toString())
    // console.log(numbers.toString().sort((a,b)=>a-b))
    let newSequence = Array.from(numbers); //accending order sort
    let sortSequence = newSequence.sort((a,b)=>a-b);
    console.log(sortSequence);
    if (numbers.length%2==0) {
        if (sortSequence[Math.floor(numbers.length/2)] == sortSequence[Math.floor((numbers.length+1)/2)]) {
            console.log(`even no of terms = median is ${sortSequence[Math.floor(numbers.length/2)]}`)
            
        }else{
        console.log(`even no of terms = median is ${sortSequence[Math.floor(numbers.length/2)]} and ${sortSequence[Math.floor((numbers.length+1)/2)]}`)
        }
    } else {
        console.log(`odd no of terms = median is ${sortSequence[Math.floor(numbers.length/2)]}`)
    }
}
else{console.log("imput : node fileName numbersWithSpace")}