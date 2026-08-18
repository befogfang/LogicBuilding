//6. check voting eligiblity for given age


const ages = process.argv.splice(2);

let age = ages[0];

if (age>0 ) {
    switch (true) {
        case (age>0 && age<18):
            console.log("this is not valid voiting age")
            break;
        case (age>18 && age<100):
            console.log("this is valid voiting age")
            break;
        case (age>100 && age<130):
            console.log("fortunate , person has valid voiting age")
            break;
        case (age>130 ):
            console.log("let this person enjoy there time ")
            break;
    
        default:
            console.log("voting is not casual stuff")
            break;
    }
} else{"enter a valid age"}