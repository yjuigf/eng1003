"use strict";

// function to update time
function liveClock() {
    // Create a variable to hold the current date/time
    let date = new Date();

    // Get a reference to the element on the HTML page
    let clockRef = document.getElementById("clock");

    // Set the current time on the page
    clockRef.innerText = date.toLocaleTimeString()
}

// Global variable to hold interval variable
let intervalHandle = "";

// const to define the clock update speed in ms
const UPDATE_TIME_MS = 500;

// start the clock
intervalHandle = setInterval(liveClock, UPDATE_TIME_MS)