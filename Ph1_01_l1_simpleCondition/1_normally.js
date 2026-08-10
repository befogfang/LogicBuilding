//take a number and print is negative / positive or zero

function checkNumberSign(number){

    if (number ==0){
        console.log(number + " is Zero")
    } else if(number>0){
        console.log(number + " is Positive")
    } else if(number<0){
        console.log(number + " is Negative")
    } else{
        console.log(number + " is Not A Number")
    }
}

checkNumberSign(-9);  //output : Negative 
checkNumberSign(9); //output : Positive 
checkNumberSign(0); //output : Zero