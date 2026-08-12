// take  a character and check weather if it's uppercase , lowercase , a digit or a special character

/**
 * uppercase --> 65 - 90
 * lowercase --> 97 - 122
 * digit --> 48- 57  
 * special characterz -->32-space ,..., 47 - / ,, 58 - 64 ,, 123 -126
 * 
 * function used here --> .fromCharCode(ascii value)
 * 
 */

function tellWhatsthis(s){

let value = s.charCodeAt(0)
console.log(value)

if (value>64 && value<91){
    console.log("Uppercase")
} else if(value>96 && value<123 ){
console.log("LowerCase")
}else if(value>47 && value<90){
console.log("Digit")
}else if(value>31 && value<48){
console.log("Special charcter")
}
 else {
    console.log("not uppercase")
}
    
}

tellWhatsthis("t")
tellWhatsthis("@")
tellWhatsthis("T")
tellWhatsthis("6")