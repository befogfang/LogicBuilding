//9. take a day no and tell what day its of the week
/**
 * 7 days  - I - sunday
 */

let days = process.argv.slice(2)

if (days.length>0) {
    dayName=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
        console.log(days)
    for (let i = 0; i < days.length; i++) {
            if (days[i]<=7 && days[i]>0) {
                console.log(`for number ${days[i]} day is ${dayName[Number(days[i].toString()-1)]}`)
            } else{
                console.log(`And instead of ${days[i]} pls enter number 1-7`)
            }

    }

        

}else{
    console.log("please enter the input as node <filename> <number of day 1-7 >")
}