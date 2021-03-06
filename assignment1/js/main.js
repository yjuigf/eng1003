"use strict";
/**
 * edit function
 * Runs when the edit button of an item is clicked.
 * Sends the user to the edit page after storing the information necessary
 * @param {number} category category index in inventory
 * @param {number} item item index in inventory
 */
function edit(category, item) {
    // store data in LS
    localStorage.setItem(CATEGORY_KEY, category);
    localStorage.setItem(ITEM_KEY, item);
    // redirect to edit page
    window.location = "edit.html";
}

/**
 * addClothingCategory function
 * Runs when 'Add Category' is clicked on the header nav bar.
 * Creates a new category, saves it in LS and updates the display
 */
function addClothingCategory() {
    // Get category name
    let newCategory = prompt("Name of new category?");
    // if user clicks cancel
    if (newCategory == null) {
        return;
    }
    // Try again if empty input
    while (newCategory == "") {
        alert("That input is invalid");
        newCategory = prompt("Name of new category?");
    }
    // Confirm add category
    if (confirm(`Confirm to add ${newCategory} as a category?`)) {
        // add to inventory
        inventory.addCategory(newCategory);
        // update LS
        updateLSData(WAREHOUSE_KEY, inventory);
        // update display
        displayInventory(inventory);
    }
}

/**
 * cancelAddClothingItem function
 * Runs when the cancel button is clicked inside the dialog polyfill.
 * Closes the dialog box.
 */
function cancelAddClothingItem() {
    // close dialog box
    dialog.close();
}

function addClothingItem() {
    // TODO: Task 2
    // reset dialog box inputs
    document.getElementById("newItemName").value = "";
    document.getElementById("newItemStock").value = "";
    document.getElementById("newItemPrice").value = "";

    // generate option elements for the category and display them on the page
    let list = document.getElementById("newItemCategory");

    // default option is blank
    let output = '<option value="0"></option>';

    // create an option for each category currently in the warehouse array
    for (let i = 0; i < inventory.warehouse.length; i++) {
        output += `<option value="${i}">${inventory.warehouse[i].category}</option>`;
    }
    list.innerHTML = output;

    // show the dialog box to the user
    dialog.showModal();
}

function displayInventory(inventory) {
    // TODO: Task 3
    let ivtContentRef = document.getElementById("inventoryContainer");

    // start printing if the warehouse is not empty
    if (inventory.warehouse.length != 0) {
        // start new string
        let ivtContent = "";

        // create category and table header for each category
        for (let i = 0; i < inventory.warehouse.length; i++) {
            ivtContent += `<div class="mdl-grid">
            <div class="mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"
                id="inventoryContent">
                <h5>${inventory.warehouse[i].category}</h5>
                
                <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                    <thead>
                        <tr>
                            <th class="mdl-data-table__cell--non-numeric">Item</th>
                            <th>Stock</th>
                            <th>Unit price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>`;

            // create row for each item in category
            for (let j = 0; j < inventory.warehouse[i].items.length; j++) {
                ivtContent +=
                `<tr>
                    <td class="mdl-data-table__cell--non-numeric">${inventory.warehouse[i].items[j].name}</td>
                    <td>${inventory.warehouse[i].items[j].stock}</td>
                    <td>$${inventory.warehouse[i].items[j].price}</td>
                    <td><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button" onclick="edit(${i},${j})">Edit</button></td>
                </tr>`;
            }

            // close tags
            ivtContent += `</tbody></table></div></div>`;
        }

        // update the display
        ivtContentRef.innerHTML = ivtContent;
    }
}

function confirmAddClothingItem() {
    // TODO: Task 4
    // define inputs 
    let itemNameRef = document.getElementById("newItemName").value;
    let itemStockRef = document.getElementById("newItemStock").value;
    let itemPriceRef = document.getElementById("newItemPrice").value;
    let itemCategory = document.getElementById("newItemCategory").value;

    // add item to warehouse
    let newItem = new ClothingItem(itemNameRef, itemStockRef, itemPriceRef);
    inventory.addItem(newItem, itemCategory);

    // update local storage 
    updateLSData(WAREHOUSE_KEY, inventory);

    // display inventory, close dialog window
    displayInventory(inventory);
    dialog.close();
}

// Global code
// Registers the dialog box polyfill
let dialog = document.getElementById("addDialog");
if (!dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
}

// Displays the warehouse inventory when the page loads
displayInventory(inventory);