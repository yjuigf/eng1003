"use strict";

let data = ["Western Food", "Halal", "Sushi", "Mexican Food", "Finger Food", 
"Vegetarian", "Vegetarian", "Pizza", "Finger Food", "Malaysian Food", "Malaysian Food", 
"Western Food", "Sushi", "Indonesian Food", "Vegetarian", "Finger Food", "Malaysian Food", 
"Halal", "Western Food", "Finger Food", "Pizza", "Mexican Food", "Halal", "Indonesian Food", 
"Australian Food", "Pizza", "Chinese Food", "Chinese Food", "Indonesian Food", "Vegetarian", 
"Malaysian Food", "Indonesian Food", "Greek Food", "Greek Food", "Australian Food", 
"Australian Food", "Australian Food", "Chinese Food", "Halal", "Western Food", "Halal", 
"Finger Food"];

function countUnique (arr) {
   let counts = {};
   for (let i=0; i<arr.length; i++) {
      counts[arr[i]] = 1 + (counts[arr[i]] || 0);
   };
   return counts;
}
console.log(countUnique(data));