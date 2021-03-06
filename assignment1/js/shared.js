"use strict";
// Predefined keys for LS
const CATEGORY_KEY = "currentCategoryIndex";
const ITEM_KEY = "currentItemIndex";
const WAREHOUSE_KEY = "warehouseData";

class ClothingItem
{
    // TODO: Task 1
    constructor(name, stock, price) {
        this._name = name;
        this._stock = stock;
        this._price = price;
    }

    // getters
    get name() {
        return this._name;
    }

    get stock() {
        return this._stock;
    }

    get price() {
        return this._price;
    }

    // setters
    set name(newName) {
        if (typeof(newName) == String) {
            this._name = newName;
        }
    }

    set price(newPrice) {
        if (typeof(newPrice) == Number) {
            this._price = newPrice;
        }
    }

    set stock(newStock) {
        if (typeof(newStock) == Number) {
            this._stock = newStock;
        }
    }

    // methods
    fromData(data) {
        // set attributes
        this._name = data._name;
        this._stock = data._stock;
        this._price = data._price;
    }
}

class Inventory
{
    // TODO: Task 1
    constructor() {
        this._warehouse = [];
    }

    // getters
    get warehouse() {
        return this._warehouse;
    }

    // methods
    addCategory(categoryName) {
        // add a new category to the warehouse array
        let newCat = {
            category: categoryName,
            items: []
        };
        this._warehouse.push(newCat);
    }

    addItem(clothingItem, categoryIndex) {
        // add a clothing item to the warehouse array in its appropriate category
        if (clothingItem instanceof ClothingItem) {
            this._warehouse[categoryIndex].items.push(clothingItem);
        }
    }

    getItem(categoryIndex, itemIndex) {
        //  return a clothing item from the warehouse using the provided category and item index
        return this._warehouse[categoryIndex].items[itemIndex];
    }

    fromData(data) {
    // re-instantiate classes when data is retrieved from local storage
        let warehouse = data._warehouse;
        this._warehouse = [];

        // recreate each category as an object
        for (let i=0; i<warehouse.length; i++) {
            let tempCategory = {
                category: warehouse[i].category,
                items: warehouse[i].items
            };

            // recreate each item in each category as an instance of ClothingItem
            for (let j=0; j<tempCategory.items.length; j++) {
                let tempClothing = new ClothingItem();
                tempClothing.fromData(tempCategory.items[j]);
                tempCategory.items[j] = tempClothing;
            }

        // update the data object
        this._warehouse.push(tempCategory);    
        }
    }
}

/**
 * checkLSData function
 * Used to check if any data in LS exists at a specific key
 * @param {string} key LS Key to be used
 * @returns true or false representing if data exists at key in LS
 */
function checkLSData(key)
{
    if (localStorage.getItem(key) != null)
    {
        return true;
    }
    return false;
}
/**
 * retrieveLSData function
 * Used to retrieve data from LS at a specific key. 
 * @param {string} key LS Key to be used
 * @returns data from LS in JS format
 */
function retrieveLSData(key)
{
    let data = localStorage.getItem(key);
    try
    {
        data = JSON.parse(data);
    }
    catch(err){}
    finally
    {
        return data;
    }
}
/**
 * updateLSData function
 * Used to store JS data in LS at a specific key
 * @param {string} key LS key to be used
 * @param {any} data data to be stored
 */
function updateLSData(key, data)
{
    let json = JSON.stringify(data);
    localStorage.setItem(key, json);
}
// Global inventory variable
let inventory = new Inventory();

// Check if data available in LS before continuing
if (checkLSData(WAREHOUSE_KEY))
{
    // If data exists, retrieve it
    let data = retrieveLSData(WAREHOUSE_KEY);
    // Restore data into inventory
    inventory.fromData(data);
}