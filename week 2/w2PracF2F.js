"use strict";

//RULER METHOD
/*
1. measure the building height on the diagram
2. find the scale (the given height divided by the measured height)
3. find the length and width of the land area by multiplying the 
measured length and width (in cm) by the scale found in step 2
4. find the area by multiplying the length and width from step 3
5. find the required number of slabs by dividing by the area of each slab
6. round the result for the area to the next whole number
*/

const s=15/2.7; //scale: 15m was measured to be 2.7cm
let l=8.9*s; //length is 8.9; scale is 1:1000
let w=5.3*s; //width is 5.3
let a=l*w; //area is length * width
let num=a/1; //each slab is 1m^2
console.log(Math.ceil(num)); //print output to the next integer


//PROTRACTOR METHOD
/*
1. measure the angle between the height of the building and the floor
2. use trigonometry to calculate the width of the land area
3. use ratios from the diagram to calculate the length of the land area, 
using the width from step 2
4. find the land area by multiplying the length and width from steps
2 and 3
5. find the required number of slabs by dividing by the area of each slab
6. round the result for the area to the next whole number
*/

let w2=15/Math.tan(27*Math.PI/180); //using the angle found on the diagram
let l2=w2*(5/3); //using ratios; width is 3 blocks while length is 5 blocks
let a2=w2*l2; //area is length * width
let num2=a2/1; //each slab is 1m^2
console.log(Math.ceil(num2)); //print output to the next integer