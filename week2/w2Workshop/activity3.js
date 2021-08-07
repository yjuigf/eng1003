"use strict";

//define variables
let pileOfCards = [7, 1, 10, 3, 4, 8, 2, 6, 9, 5];
let sortedPile = [];
let num = 0;
let j=0;
const length = pileOfCards.length;

sortedPile[0] = pileOfCards[0]; //put down a card

//find the lowest number in the array, add to the sorted array
for (let i=0; i<length; i++) {
    num = Math.min(...pileOfCards); //find minimum value
    sortedPile[i] = num;
    j = pileOfCards.findIndex(element => (element==num)); //index of minimum value
    pileOfCards.splice(j,1); //remove minimum value from original
}

console.log(sortedPile);