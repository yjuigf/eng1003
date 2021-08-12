"use strict";

//question 4
//degrees to radians
function toRadians(deg) {
    let rad = deg * Math.PI / 180;
    return rad;
}

//radians to degrees
function toDegrees(rad) {
    let deg = rad * 180 / Math.PI;
    return deg;
}

//question 5
//find numbers
function findNumbers(digit, data) {
    let ans = [];

    //numbers with the specified number of digits
    for (let i=0; i<data.length; i++) {
        if (data[i].toString().length == digit) {
            ans.push(data[i]);
        }
    }

    //numbers with digit sum < 10
    for (let i=0; i<data.length; i++) {
        let datai = data[i].toString();
        let sum = 0;
        for (let j=0; j<datai.length; j++) {
            sum += parseFloat(datai[j]);
        }
        if (sum < 10) {
            ans.push(parseFloat(datai));
        }
    }

    return ans;
}

// test code
let digit = 3;
let numbers = [1590, 276, 580, 246, 5005, 3315, 6595, 9788, 223, 6613, 2836, 3891, 6204, 7035, 401, 912, 662, 123, 472, 428, 8507, 9259, 78, 1817, 8075, 3581, 3669, 680, 740, 2569, 0, 7827, 2402, 8311, 1955, 453, 9014, 402, 8323, 6941, 692, 8565, 3568, 3471, 4916, 807, 3610, 938, 633, 743];

console.log(findNumbers(digit, numbers));