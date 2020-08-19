const read = require("readline-sync");

console.log("Enter a number to its day");

let dayNum = read.question();

let day 

switch(dayNum) {
    case '1' : day = "Monday";
            break;
    
    case '2' : day = "Tuesday";
            break;
    
    case '3' : day = "Wenesday";
            break;
    
    case '4' : day = "Thursday";
            break;
    
    case '5' : day = "Friday";
            break;
    
    case '6' : day = "Satutday";
            break;
    
    case '7' : day = "Sunday";
            break;
    
    default : day = "Error";
}

console.log(day);