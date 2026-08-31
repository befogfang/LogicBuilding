//Take two dates (day and month) and determine which one comes first in the calendar.  


function checkRecentDate(d1,m1,d2,m2) {
    if (m2>m1) {
        console.log(`${d1},${m1} this date comes first`)
    }else if (m1>m2) {
        console.log(`${d2},${m2} this date comes first`)
    }else if (m1==m2) {
        if (d1<d2) {
            console.log(`${d1},${m2} this date comes first`)
        } else {
            console.log(`${d2},${m2} this date comes first`)
        }
    }
}

checkRecentDate(2,2,3,6)