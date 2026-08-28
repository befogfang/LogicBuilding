// Take income and age, and check if eligible for tax (age > 18 and income > 5 L).

let checkEligiblity = (income, age) => {
    ((age>18)&&(income>500000))? console.log("person has to pay some taxes"):  console.log( "not in tax slab" );
}

checkEligiblity(5000000,50)