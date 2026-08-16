//hoisting 
/**
 * function declaration can be called before they are defined
 * 
 * fucntion expression can not be called before they are defined 
 * 
 * basically , jab ham fuction ko uske call krne ke baad declare krte hai 
 */


let sum =  add(2,3)
// function add(a,b){return a+b};

let add = function (a,b) {return a+b};

console.log(sum)