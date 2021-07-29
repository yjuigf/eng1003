"use strict";

let x1 = 1;
let y1 = 3;
let x2 = 4;
let y2 = 8;

let a = x2-x1;
let b = y2-y1;
let a2 = Math.pow(a,2);
let b2 = Math.pow(b,2);
let c = Math.sqrt(a2+b2);

let output = "";
output += `distance between points = ${c}`;
console.log(output);