// Take a weekday number (1–7) and determine if it is a weekday or weekend. 
  
function whatWeekNumber(number) {
    if (number>0 && number<=5) {
        return "weekdays"
    }else if(number>5 && number<8){
        return "weekend"
    } else{
        return "please enter week number between  1 and 7"
    }
}
console.log(whatWeekNumber(5))
console.log(whatWeekNumber(7))
console.log(whatWeekNumber(27))