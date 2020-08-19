const read = require("readline-sync");

console.log("Enter 3 Numbers to find largest");

var fNum = read.question()
var sNum = read.question()
var tNum = read.question()

console.log("Your Number is :" + fNum + " " + sNum + " " + tNum);

if (fNum > sNum) {
    if (fNum > tNum) {
        console.log("Largest is " + fNum);
    } else {
        console.log("Largest is " + tNum);
    }
} else if (sNum > tNum) {
    console.log("Largest is " + sNum);
} else {
    console.log("Largest is " + tNum);
}
