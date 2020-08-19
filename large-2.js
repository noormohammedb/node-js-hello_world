const read = require("readline-sync");

console.log("Enter 2 Numbers to find largest");

var fNum, sNum;

fNum = read.question()
sNum = read.question()

if (fNum > sNum) {
    console.log("largest is "+fNum);
} else {
    console.log("largest is "+sNum);
}