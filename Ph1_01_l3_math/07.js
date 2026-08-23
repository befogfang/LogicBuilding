// Check if an amount can be evenly divided into 2000, 500, and 100 currency notes.  
/**
 * any amoung adnd that would be the hcf of 2000- 4000 ,..
 *  500 - multiple of 500
 *  100 - multiple of 100 
 * 
 * now here ie - 2600 - is one of case where output must be true
 */

const getNotes = (amt) =>{
    if (amt<0 || (amt%100 != 0)) return null ;
    let n2000 = Math.floor(amt/2000) ; amt%=2000;
    let n500 = Math.floor(amt/500) ; amt%=500;
    let n100 = Math.floor(amt/100) ;
    return { "2000" : n2000 , "500" :n500 , "100":n100}
}

console.log(getNotes(443400))