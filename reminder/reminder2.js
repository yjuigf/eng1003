"use strict";

// Class to store the data for a single reminder
class Reminder
{
	constructor(content, date)
	{
		this._content = content;
		this._date = date;
	}

	// accessors
	get content() { return this._content; }
	get date() { return this._date; }
	// note: no mutators because the web app doesn't allow you
	//       change the content of a reminder after creation
	
    // methods
	toString()
	{
		return `<p>${this.content} at ${this.date}</p>`;
	}
	// this is a method to 'restore' the values of the current
	// reminder item from public data.
	// i.e. if you have an object that contains data for a 
	// single reminder, you can call this method to restore
	// that saved data
	fromData(object)
	{
		this._content = object._content;
		this._date = object._date;
	}
}

// Class for the list of reminders 'ReminderList'
class ReminderList
{
	constructor()
	{
		this._list = [];
	}

	// accessors
	get list() { return this._list; }
	get length() { return this._list.length; }
	// note: no mutators because we will never 'replace' the list

	// methods
	toString()
	{
		// if empty list
		if (this.length === 0)
	    {
	        return "<p>This list is empty</p>";
	    }
	    // non empty list... continue
		let output = "";
		for (let i = 0; i < this.length; i++)
	    {
	        // append output
	        output += this.list[i].toString();
	    }
	    return output;
	}

	// TODO: Write a method 'addReminder' that takes two parameters
	//       'content' and 'date'.
	//       The method should create a new Reminder class instance
	//       and add it to the list in this class instance using .push
	//       You don't have to validate the arguments.
    addReminder(content, date)
    {
        reminder = new Reminder(content, date);
        this._list.push(reminder);
        return this._list;
    }
	
	// TODO: Write a method 'fromData' that takes one parameter
	//       'data'.
	//       This method is used when restoring a reminder list from 
	//       local storage data.
	//       The method should begin by resetting this instance's list 
	//       array to empty ( [] ), then loop over the _list array 
	//       in the data, creating new Reminder instances for each 
	//       item, and call the Reminder 'fromData' method before 
	//       push/ adding it to the 'list' array.
	fromData(data1)
    {
        let temp = data1._list;
        this._list = [];

        for (let i = 0; i < temp.length; i++)
        {
            let reminder = new Reminder();
            reminder.fromData(temp[i]);
            this._list.push(reminder);
        }
    }
	
}

// TODO: Write a function "storeData" with two parameters, "data" and "key" 
//       This function is responsible for storing data into localStorage.
/*
    Pseudo-code for storeData
    1. Check if data is an object. If it is an object, 
       convert it into a string using JSON.stringify
    2. use localStorage.setItem(key, value) on the data above

 */
// responsible for storing data into localStorage.
function storeData(data, key) {
    // convert data to a string if it is an object
    if (typeof (data) == Object) {
        data = JSON.stringify(data);
    }
    localStorage.setItem(key, data);
}

// TODO: Write a function "retrieveData" with one parameter, "key" 
//       This function is responsible for retrieving data from localStorage.
/*
    Pseudo-code for retrieveData
    1. use localStorage.getItem(key) to retrieve the data
    2. use try-catch-finally to convert it back using JSON.parse
    3. in finally, return the data
 */
// responsible for retrieving data from localStorage.
function retrieveData(key) {
    let jsonData = localStorage.getItem(key);

    try 
    {
        jsonData = JSON.parse(jsonData);
    } 
    catch (e) 
    {
        console.log("Error: Data could not be converted.");
    } 
    finally 
    {
        return jsonData;
    }
}

// function addToList()
// This function is triggered by the button click on the reminder page
// It adds a reminder item to the global list, reminderList
function addToList()
{
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

    reminderList.addReminder(item.content, item.date);

    listContent = reminderList.toString();

    // store data in local storage
    storeData(reminderList, STORAGE_KEY);

    // update the page with new count and list
    countRef.innerText = reminderList.length;
    listRef.innerHTML = listContent;

}
// function for the live clock on the page
function liveClock()
{
    // Create a variable to hold the current date/time
    let date = new Date();

    // Get a reference to the element on the HTML page
    let clockRef = document.getElementById("clock");

    // Set the current time on the page
    clockRef.innerText = date.toLocaleTimeString()
}

// variable definitions
let reminderList = new ReminderList(); // empty array to hold list of reminders
const STORAGE_KEY = "asdmfjgbq8374tbnjdsfgh"; // create a key to use for local storage
let listRef = document.getElementById("reminderList"); // reference for the reminderList div
let countRef = document.getElementById("reminderCount"); // reference for the count field
let intervalHandle = ""; // Global variable to hold interval variable

// const to define the clock update speed in ms
const UPDATE_TIME_MS = 500;
// start the clock
intervalHandle = setInterval(liveClock, UPDATE_TIME_MS)

// TODO: on page load (here), 
// 1. check if local storage is available
if (typeof (Storage) !== "undefined") {
    console.log("localStorage is available.");
} else {
    console.log("localStorage is not supported by current browser.");
}

// 2. get data from local storage 
let data = retrieveData(STORAGE_KEY);

// 3. check if local storage data is empty (if empty, start with blank array)
// 4. generate list and display
if (data != "" && data != undefined) {
    reminderList = new ReminderList();
    reminderList.fromData(data);
} else {
    reminderList = [];
}

// 5. update reminder count
countRef.innerText = reminderList.length;
listRef.innerHTML = listContent;

// add event listener to button
let buttonRef = document.getElementById("submit");
buttonRef.addEventListener("click", addToList);