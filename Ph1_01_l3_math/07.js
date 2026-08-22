// Check if an amount can be evenly divided into 2000, 500, and 100 currency notes.  
/**
 * any amoung adnd that would be the hcf of 2000- 4000 ,..
 *  500 - multiple of 500
 *  100 - multiple of 100 
 * 
 * now here ie - 2600 - is one of case where output must be true
 */

function c251(amount) {
    //2600 = 2000 + 500 + 100
    if (amount%100) {
        if ((amount-(amount%500))%500) {
            if (amount-(((amount-(amount%500))%500))%2000) {
                console.log("true")
            }
        }
    }
}

c251(2600)

// console.log(4000%2000==0)
// console.log(2600 - (2600%500))
// console.log((3000%500))
console.log((3000%100))
