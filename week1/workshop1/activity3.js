"use strict";

//part 1//
let r1 = 13.5/2;
let V1 = (4/3)*Math.PI*Math.pow(r1,3);
let A = 4*Math.PI*Math.pow(r1,2);
let output1 = "";
output1 += `Given a sphere with diameter ${r1*2}m, its volume is: ${V1.toFixed(2)} m3 and its surface area is: ${A.toFixed(2)} m2.`;
console.log(output1);

//part 2//
let r2 = 10.25/2;
let h = 20.5;
let V2 = Math.PI*Math.pow(r2,2)*h/3;
let output2 = "";
output2 += `The volume of a cone given a diameter of ${r2*2}m and height of ${h}m is ${V2.toFixed(2)}m`;
console.log(output2);

//part 3//
let referenceString = "abcdefghijklmnopqrstuvqxyz";
let output3 = "";
output3 += referenceString.charAt(5).toUpperCase();
output3 += referenceString.charAt(14);
output3 += referenceString.charAt(23);
console.log(output3);