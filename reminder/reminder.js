"use strict";

// Define function addToList()
function addToList() {
    // Reference Variables (to items in the DOM)
    let dateRef = document.getElementById("dateInput");
    let contentRef = document.getElementById("reminderInput");
    let countRef = document.getElementById("reminderCount");
    let listRef = document.getElementById("reminderList");

    // Working variables (used inside this code only)
    let listContent = "";
    let date = new Date(dateRef.value);
    let content = contentRef.value;
    let count = Number(countRef.innerHTML);
    let item = "";

    // If statement to check if there is an existing list on the page by checking 
    // the value of the count variable. The current list is stored in the "listContent"
    // variable.
    if (count > 0) {
        listContent = listRef.innerHTML;
    }

    // Store the new reminder in the "item" variable
    item = content + " at " + date.toDateString();

    // Append / concatenate the value in "item" to the variable "listContent".
    listContent += "<br>" + item + "</br>";

    // Increment the variable "count"
    count++;

    // Display the result to the user
    countRef.innerHTML = count;
    listRef.innerHTML = listContent;

}

let buttonRef = document.getElementById("submit");
buttonRef.addEventListener("click", addToList);