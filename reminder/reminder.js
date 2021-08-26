"use strict";

console.log("test");

// responsible for adding the parameter "item" to the array provided in the parameter "list".
function addItemToList(item, list) {
    // check that the item is an object
    if (typeof item !== 'object') {
        return false;
    }
    // check that the list is an array
    if (!Array.isArray(list)) {
        return false;
    }
    // check that the item object has correct properties
    if (!item.hasOwnProperty('content') || !item.hasOwnProperty('date')) {
        return false;
    }
    // all checks are valid, now add the item to the list
    list.push(item);
    return true; // return success
}

// takes one parameter "list" and returns a HTML string of the list contents
function generateListHTML(list) {
    // define and initialise output variable
    let output = "";
    // check if the list is empty
    if (list.length === 0) {
        return "<p>This list is empty</p>";
    }
    // generate the html for the list using a for loop
    for (let i = 0; i < list.length; i++) {
        // create a variable (shortcut) hold current item
        let item = list[i];
        // append output
        output += `<p>${item.content} at ${item.date}</p>`;
    }
    // return the output if all OK
    return output;
}

// responsible for storing data into localStorage.
function storeData(data, key) {
    // convert data to a string if it is an object
    if (typeof (data) == Object) {
        data = JSON.stringify(data);
    }
    localStorage(key, data);
}

// responsible for retrieving data from localStorage.
function retrieveData(key) {
    jsonData = localStorage.getItem(key);

    try {
        let data = JSON.parse(jsonData);
    } catch (e) {
        console.log("Error: Data could not be converted.")
    } finally {
        return data;
    }
}

// triggered by the button click on the reminder page
// adds a reminder item to the global list, reminderList
function addToList() {
    console.log("test");
    // reference variables
    let dateRef = document.getElementById("dateInput");
    let contentRef = document.getElementById("reminderInput");

    // working variables
    let listContent = "";

    // variable "item", initialised as an object with content and date property 
    let item = {
        content: contentRef.value,
        date: new Date(dateRef.value).toDateString()
    };

    addItemToList(item, reminderList);

    listContent = generateListHTML(reminderList);

    // store data in local storage
    storeData(reminderList, STORAGE_KEY);

    // update the page with new count and list
    countRef.innerText = reminderList.length;
    listRef.innerHTML = listContent;
}

// function for the live clock on the page
function liveClock() {
    // Create a variable to hold the current date/time
    let date = new Date();

    // Get a reference to the element on the HTML page
    let clockRef = document.getElementById("clock");

    // Set the current time on the page
    clockRef.innerText = date.toLocaleTimeString()
}

// variable definitions
let reminderList = []; // empty array to hold list of reminders
const STORAGE_KEY = "asdmfjgbq8374tbnjdsfgh"; // create a key to use for local storage
let listRef = document.getElementById("reminderList"); // reference for the reminderList div
let countRef = document.getElementById("reminderCount"); // reference for the count field
let intervalHandle = ""; // Global variable to hold interval variable

// const to define the clock update speed in ms
const UPDATE_TIME_MS = 500;
// start the clock
intervalHandle = setInterval(liveClock, UPDATE_TIME_MS)

// on page load
// check if local storage is available
if (typeof (Storage) !== "undefined") {
    console.log("localStorage is available.");
} else {
    console.log("localStorage is not supported by current browser.");
}

// get data from local storage 
data = retrieveData(STORAGE_KEY);

// check if local storage data is empty, generate list 
if (data === null) {
    reminderList = [];
} else {
    reminderList = data;
}

// update reminder count and list
countRef.innerText = reminderList.length;
listRef.innerHTML = listContent;

// add event listener to button
let buttonRef = document.getElementById("submit");
buttonRef.addEventListener("click", addToList);