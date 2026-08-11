//take a tempreature and tell weather it' cold / warm / hot

/**
 * lets do this taking tempreatures in degree
 * 
 * cold - less than 20 degree celcius
 * warm - less than 30 but more than 20 degree celcius
 * hot - more than 30 degree celcius
 */

function tempCheck(tem) {
    if(tem <20){
        console.log("Cold")
    }else if(tem >20 && tem < 30){
        console.log("Warm")
    }else if(tem > 30){
        console.log("Hot")
    }else{
        console.log("Please Enter the Tempreature in Degree Celcius")
    }
}

tempCheck(-90)
tempCheck(90)
tempCheck(9)
tempCheck(29)