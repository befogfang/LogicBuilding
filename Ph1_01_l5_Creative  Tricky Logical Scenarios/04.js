//Take time (hours and minutes) and print the smaller angle between the hour and minute hands.  

function timeToAngle(h,m) {
    if((h<0)||(h>12)||(m<0)||(m>60)){
        return "enter the correct time in 12 hour clock"
    }else{
        //12 -- 360
        let hTom= h*5;
        let angleBetweenMin = Math.abs( m -hTom)*(360/60);
        return "angle between the hands are "+angleBetweenMin+" degree";
    }
}

console.log(timeToAngle(3,15))
console.log(timeToAngle(3,159))
console.log(timeToAngle(3,14))