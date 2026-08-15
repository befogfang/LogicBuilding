//take three side and check if they form a valid triangle

/**
 * s1,s2,s3 
 * s1+s2 < s3 (s3 --> length of side 3)
 * @param int 
 * 
 */

function validTriangle(sideArray) {
    console.log(sideArray)
    // console.log(sideArray.sort((a,b) => a-b))

    ssa = sideArray.sort((a,b) => a-b)

    console.log(ssa)
    let s1 = ssa[0]
    let s2 = ssa[1]
    let s3 = ssa[2]
    // console.log(ssa[3])

    let s12s = s1 +s2 ;
    if (s3 < s12s) {
        console.log("valid triangle")
    } else{
        console.log("Not a Valid triangle")
    }
}

validTriangle([5,4,3])