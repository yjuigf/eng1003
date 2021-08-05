"use strict";

let hour = new Date().getHours(); //get time

//check which output to print
if (hour>=0 && hour<6) {
    console.log("It's night time - you're up late!");
} else if (hour>=6 && hour<12) {
    console.log("Good Morning!");
} else if (hour>=12 && hour<18) {
    console.log("Good Afternoon!");
} else if (hour>=18 && hour<22) {
    console.log("Good Evening!");
} else {
    console.log("Good Night!");
}