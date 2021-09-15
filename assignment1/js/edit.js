"use strict";
// Global code to retrieve data to be edited
let categoryIndex = retrieveLSData(CATEGORY_KEY);
let itemIndex = retrieveLSData(ITEM_KEY);

let item = inventory.getItem(categoryIndex,itemIndex);

// TODO: Task 5.2.1
// set inputs to previous item values
document.getElementById("updateItemName").value = `${item._name}`;
document.getElementById("updateItemPrice").value = `${item._price}`;
document.getElementById("updateItemStock").value = `${item._stock}`;

let updateNameRef = document.getElementById("updateItemName");
let updatePriceRef = document.getElementById("updateItemPrice");
let updateStockRef = document.getElementById("updateItemStock");

function submit() {
    // TODO: Task 5.2.2
    if (confirm(`Confirm to change details of ${item._name}?`)) {
        // update inventory
        item._name = updateNameRef.value;
        item._price = updatePriceRef.value;
        item._stock = updateStockRef.value;

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