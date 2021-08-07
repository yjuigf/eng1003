//QUESTION 1
/*
pseudocode
1. get an empty cup (cup 4)
2. pour the contents of cup 3 (milk) into cup 4
3. pour the contents of cup 2 (honey water) into cup 3
4. pour the contents of cup 1 (vodka) into cup 2
5. pour the contents of cup 4 (milk) into cup 1
*/
//define and initialise variables
let n1 = "vodka";
let n2 = "honey water";
let n3 = "milk";
//method
let n4 = "";
n4 = n3;
n3 = n2;
n2 = n1;
n1 = n4;

//print out the variables to the console
console.log("Question 1:");
console.log("cup 1: " + n1);
console.log("cup 2: " + n2);
console.log("cup 3: " + n3);


//QUESTION 2
let input = [[2, 1], [0, 2], [19, 3]];
const LOOKUP = "abcdefghijklmnopqrstuvwxyz";
//get index of each letter
let input1 = input[0][0];
let input2 = input[1][0];
let input3 = input[2][0];
//concatenate and print output
let output = LOOKUP.substring(input1,input1+1);
output = output + LOOKUP.substring(input2,input2+1);
output = output + LOOKUP.substring(input3,input3+1);
console.log("\nQuestion 2: "+output);


//QUESTION 3
//define variables
let u = 20; 
let theta = 30*Math.PI/180;
let h = 4.5;
let g = 9.81;
//define components
let comp1 = Math.pow(u,2)*Math.tan(theta);
let comp2 = u*Math.sqrt(Math.pow(u,2)*Math.pow(Math.tan(theta),2)-2*g*h*Math.pow(1/Math.cos(theta),2));
let comp3 = g*Math.pow(1/Math.cos(theta),2);
//calculate x
let x1 = (comp1 + comp2)/comp3;
let x2 = (comp1 - comp2)/comp3;
console.log(`\nQuestion 3: x = ${x1.toFixed(2)} or x = ${x2.toFixed(2)}.`);