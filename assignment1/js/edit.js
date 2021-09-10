"use strict";
// Global code to retrieve data to be edited
let categoryIndex = localStorage.getItem(CATEGORY_KEY);
let itemIndex = localStorage.getItem(ITEM_KEY);
let item = inventory.getItem(CATEGORY_KEY, ITEM_KEY);

// TODO: Task 5.1
let updateNameRef = document.getElementById("updateItemName");
let updatePriceRef = document.getElementById("updateItemPrice");
let updateStockRef = document.getElementById("updateItemStock");

// update input values
updateNameRef.innerHTML = `${item.name}`;
updatePriceRef.innerHTML = `$${item.price}`;
updateStockRef.innerHTML = `${item.stock}`;

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