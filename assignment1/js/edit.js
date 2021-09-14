"use strict";
// Global code to retrieve data to be edited
let categoryIndex = retrieveLSData(CATEGORY_KEY);
let itemIndex = retrieveLSData(ITEM_KEY);
let warehouse = retrieveLSData(WAREHOUSE_KEY);

let item = warehouse._warehouse[categoryIndex].items[itemIndex];
console.log(item._name);

// TODO: Task 5.1
// set inputs to previous item values
document.getElementById("updateItemName").defaultValue = `${item._name}`;
document.getElementById("updateItemPrice").defaultValue = `$${item._price}`;
document.getElementById("updateItemStock").defaultValue = `${item._stock}`;

let updateNameRef = document.getElementById("updateItemName");
let updatePriceRef = document.getElementById("updateItemPrice");
let updateStockRef = document.getElementById("updateItemStock");

function submit() {
    // TODO: Task 5.2.2
    if (confirm(`Confirm to change details of ${inventory.warehouse[categoryIndex].category}?`)) {
        // update inventory
        inventory.warehouse[categoryIndex].items[itemIndex].name = updateNameRef.value;
        inventory.warehouse[categoryIndex].items[itemIndex].price = updatePriceRef.value;
        inventory.warehouse[categoryIndex].items[itemIndex].stock = updateStockRef.value;
        // update LS
        updateLSData(WAREHOUSE_KEY, inventory);
        // update display
        window.location = "index.html";
        displayInventory(inventory);
    }
}

function cancel() {
    // TODO: Task 5.2.3
    if (confirm('Are you sure you want to cancel?')) {
        // return user to home page
        window.location = "index.html";
    }
}