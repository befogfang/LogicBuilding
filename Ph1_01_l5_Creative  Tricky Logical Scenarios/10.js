//Take a year and print the corresponding century (e.g., "19th century", "20th century").

function centuryFromYear(year) {
    if (year<0) {
        console.log("plese enter after criest ")
    }else if(year>1000 ){
        console.log(`${Math.floor(year/100)}th century`)
    }else if(year>100){
        console.log(`${Math.floor(year/100)}th century`)
    }else{
        console.log(`${Math.floor(year)}th year after criest`)
    }
}

centuryFromYear(1999)
centuryFromYear(190)
centuryFromYear(1900)
centuryFromYear(19000) //breakcs here