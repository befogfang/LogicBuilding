// Take 24-hour time (hours and minutes) and print whether it is AM or PM.

let nowTime = new Date()

let hour = nowTime.getHours()
let min = nowTime.getMinutes()


// console.log(hour,min)

if (hour>12) {
    hour = hour -12;
    console.log(hour,min+" PM")
}else{
    console.log(hour,min+" AM")
}
// console.log(hour,min)