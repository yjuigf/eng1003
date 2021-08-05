"use strict";

//part 1 (q4)
let randomNum = Math.random()*26;
randomNum = randomNum-1;
console.log(randomNum.toFixed(2));

//part 2 (q5)
let a=1.5;
let b=3.4;
let angleA = Math.atan(a/b);
angleA = angleA * 180 / Math.PI;
let angleB = Math.atan(b/a);
angleB = angleB * 180 / Math.PI;
console.log(`Angle A: ${angleA.toFixed(2)} Degrees, Angle B: ${angleB.toFixed(2)} Degrees`);