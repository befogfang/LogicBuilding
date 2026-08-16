//  if the sides form a valid triangle , determine if its eqilateral , isocelese , scalene

/**
 * first check if its a valid triangle 
 * 
 * then , check if its issocelese(a ,a,b) ,
 * 
 *  equilateral(a,a,a) 
 * 
 *  scalene (a.b.c) triangle
 */

function whatTriangle(tSide) {
    let stSide = tSide.sort((a,b)=>a-b)
    if ( !(stSide[0]+stSide[1]> stSide[2]) ) {
        console.log("cannot form a triangle with these side with sides "+stSide)
    } else{
        if ((stSide[0]==stSide[1]==stSide[2])) {
            console.log("this is An Eqilateral Tringle with sides " +stSide)
        } else if ((stSide[0]==stSide[1])||(stSide[1]==stSide[2])||(stSide[2]==stSide[0])) {
            console.log("this is issocelese triangle with sides " +stSide)
        }else{
            console.log("this is scelene Triangle with sides "+ stSide)
        }
    }
}

whatTriangle([1,9,6])
whatTriangle([1,9,9])
whatTriangle([3,4,5])
whatTriangle([3,3,3])
whatTriangle([5,9,6])