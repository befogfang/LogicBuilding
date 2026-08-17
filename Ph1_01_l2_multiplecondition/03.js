//3. take a number (0-100) and print the corresponding grade(A/B/C/D/E/F)

const marks = process.argv.slice(2);

    if(marks.length>0){
        let grade ;

        switch (true) {
            case (marks>=90):
                grade = "A";
                processGrade(grade)
                // console.log(`Your Grade is ${grade}`)
                return grade  ;  
                // break;
        
            case (marks>=80):
                grade = "A";
                processGrade(grade)
                // break;
        
            case (marks>=70):
                grade = "A";
                processGrade(grade)
                // break;
        
            case (marks>=40):
                grade = "A";
                processGrade(grade)
                // break;
        
            default:
                grade = "F";
                processGrade(grade)
                // break;

            }
            // console.log(`Your Grade is ${grade}`)


    }else{
        console.log("PLEASE ENTER THE VALID MARKS TO GET CORRECT GRADE!")
    }
    
function processGrade(g){
console.log(`Your Grade is ${g}`)

}

/** for correct way of output -- >  node <filename> argument(here marks) */


// how to process argument while running the program in js ---f

// // Get all arguments, skipping the first two (node path and script path)
// // const args = process.argv.slice(2);

// // Check if an argument was provided
// if (args.length > 0) {
//     // Convert the string argument to a number
//     const inputNumber = Number(args[0]);
    
//     // Perform your logic
//     const result = inputNumber * 2;
    
//     console.log(`You entered: ${inputNumber}`);
//     console.log(`Doubled value: ${result}`);
// } else {
//     console.log("Please provide a number as an argument.");
// }   