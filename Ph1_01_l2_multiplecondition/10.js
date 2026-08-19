//10. take a number number and print the number of days in the month ignore the leap year

// number can be from 1 - 12

const months = process.argv.slice(2);

if (months.length>0) {
    monthdays=['31','28','31','30','31','30','31','31','30','31','30','31']
    monthName =['january','feburary','march','april','may','june','july','august','septemer','october','november','december']

   for (let i = 0; i < months.length; i++) {
            if (months[i]<=12 && months[i]>0) {
                console.log(`for month number ${months[i]} days are ${monthdays[Number(months[i].toString()-1)]} and month name is ${monthName[Number(months[i].toString()-1)]}`)
            } else{
                console.log(`And instead of ${months[i]} pls enter number 1-12`)
            }

    }

} else {
    console.log("Pls enter running code as node <filename> <no of month/s you want to know no. of day in with spaces>")
}