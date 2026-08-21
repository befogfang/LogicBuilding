//Take coordinates (x, y) and determine which quadrant the point lies in.  

/** 
 *  a,b == ++ =1   
 * a,-b == +- =4   
 * -a,-b == - - =3
 * -a,b == -+ =2
 * 
*/


function determineQuadrant(a,b){
    if (a==0 && b== 0) {
        console.log("origin")
        return 0;
    }
    if (a>0) {
        (b>0)?console.log("First quad"):console.log("4 quad")
    } else {
        (b>0)?console.log("2 quad"):console.log("3 quad")
    }

}

determineQuadrant(3,4)
determineQuadrant(-3,-4)
determineQuadrant(-3,4)
determineQuadrant(3,-4)
determineQuadrant(0,0)