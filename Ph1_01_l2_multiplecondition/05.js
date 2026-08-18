//5. take the hour of the day , and print greeting accordingly

let hours = process.argv.slice(2)
// console.log(hour)

let hour = hours[0]

if(hour>=0 && hour<24 ){
    switch (true) {
        case (hour>= 0 && hour<12):
            console.log('Good morning')
            break;
        case (hour>= 12 && hour<18):
            console.log('Good afternoon')
            break;
        case (hour>= 18 && hour<24):
            console.log('Good eve')
            break;
    
        default:
            console.log("Good Day")
            break;
    }
}else(console.log("Enter correct hour pls!"))