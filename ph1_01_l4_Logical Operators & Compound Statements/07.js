// Take a single digit (0–9) and print its word form ("Zero" to "Nine").  
  
function digitToWord(digit) {
    let wordForDigits=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]
    if (digit>=0 && digit<=9) {
        console.log(wordForDigits[digit])
    } else {
        console.log("Enter the digit between 0 to 9 only")
    }

}

digitToWord(5)