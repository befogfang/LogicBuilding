//Take day and month and check if it forms a valid calendar date (ignoring leap years).  

let dayNmonth={
    '1': 31,
    '2': 30,
    '3': 31,
    '4': 30,
    '5':31 ,
    '6':30 ,
    '7': 31,
    '8': 31,
    '9': 30,
    '10': 31,
    '11': 30,
    '12': 31
}

function validate(d,m) {
    return dayNmonth[m] == d;
}

console.log(validate(31,1))