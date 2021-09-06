"use strict";
/**
 * edit function
 * Runs when the edit button of an item is clicked.
 * Sends the user to the edit page after storing the information necessary
 * @param {number} category category index in inventory
 * @param {number} item item index in inventory
 */
function edit(category,item)
{
    // store data in LS
    localStorage.setItem(CATEGORY_KEY,category);
    localStorage.setItem(ITEM_KEY,item);
    // redirect to edit page
    window.location = "edit.html";
}
/**
 * addClothingCategory function
 * Runs when 'Add Category' is clicked on the header nav bar.
 * Creates a new category, saves it in LS and updates the display
 */
function addClothingCategory()
{
    // Get category name
    let newCategory = prompt("Name of new category?");
    // if user clicks cancel
    if(newCategory == null)
    {
        return;
    }
    // Try again if empty input
    while (newCategory == "")
    {
        alert("That input is invalid");
        newCategory = prompt("Name of new category?");
    }
    // Confirm add category
    if(confirm(`Confirm to add ${newCategory} as a category?`))
    {
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
function cancelAddClothingItem()
{
    // close dialog box
    dialog.close();
}

function addClothingItem()
{
    // TODO: Task 2
    // reset dialog box inputs
    document.getElementById("newItemName").innerHTML  = "";
    document.getElementById("newItemStock").innerHTML = "";
    document.getElementById("newItemPrice").innerHTML = "";

    // generate option elements for the category and display them on the page
    let list = document.getElementById("newItemCategory");
    for (let i=0; i<inventory.warehouse.length; i++) {
        var option = document.createElement("option");
        var cat = inventory.warehouse[i].category.toString();
        console.log(cat);
        option.innerHTML = cat;
        list.add(option);
    }

    // show the dialog box to the user
    dialog.showModal();
}

function displayInventory(inventory)
{
    // TODO: Task 3
}

function confirmAddClothingItem()
{
    // TODO: Task 4
}

// Global code
// Registers the dialog box polyfill
let dialog = document.getElementById("addDialog");
if (!dialog.showModal) 
{
    dialogPolyfill.registerDialog(dialog);
}
// Displays the warehouse inventory when the page loads
displayInventory(inventory);