//Take coordinates (x, y) and check if the point lies on the X-axis, Y-axis, or at the origin.  

// function pointCheck(x, y) {
//     if (Number.isNaN(x) && Number.isNaN(y)) {    //my initial code , heare Number.isNaN(x)--> false , so the code reads from the else part  
//         if (x === 0 && y === 0) {
//             console.log("point on origin")
       
//         } else if (y === 0) {
//             console.log("point on x axis")
//         } else if (x === 0) {
//             console.log("point on y axis")
//         } else {
//             console.log("on graph at any quadrant")
//         }
//     } else {
//         console.log("enter correct cordinate points")

//     }
// }

// pointCheck(0, 0)
// pointCheck(0, 1)


//Take coordinates (x, y) and check if the point lies on the X-axis, Y-axis, or at the origin.  

function pointCheck(x, y) {
    if (!Number.isNaN(x) && !Number.isNaN(y)) {
        if (x === 0 && y === 0) {
            console.log("point on origin")
       
        } else if (y === 0) {
            console.log("point on x axis")
        } else if (x === 0) {
            console.log("point on y axis")
        } else {
            console.log("on graph at any quadrant")
        }
    } else {
        console.log("enter correct cordinate points")

    }
}

pointCheck(0, 0)
pointCheck(0, 1)