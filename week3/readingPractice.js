"use strict";

//question 1
function area(radius) {
    console.log((Math.PI * Math.pow(radius, 2)).toFixed(2));
}

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let A = [];

function area2(radius) {
    for (let i = 0; i < radius.length; i++) {
        A[i] = (Math.PI * Math.pow(radius[i], 2)).toFixed(2);
    }
}
area2(data);

let C = [];

function circumference(radius) {
    for (let i = 0; i < radius.length; i++) {
        C[i] = (Math.PI * 2 * radius[i]).toFixed(2);
    }
}
circumference(data);

function print(radius, area, circumference) {
    for (let i = 0; i < radius.length; i++) {
        console.log(`Circle with Radius ${radius[i]}cm: Area is ${area[i]}, Circumference is ${circumference[i]}`);
    }
}
print(data, A, C);

console.log("===============================================================");

//question 2
let sortedArray = [9, 10, 12, 13, 13, 13, 15, 15, 15, 16, 16, 16, 18, 22, 23, 24, 24, 24, 25, 26];

function mean(data) {
    let output = 0;
    for (let i = 0; i < data.length; i++) {
        output += data[i];
    }
    output = output / data.length;
    return output;
}
let m1 = mean(sortedArray);

function median(data) {
    let n = data.length;
    if (n % 2 == 0) {
        return data[n / 2];
    } else {
        return (data[(n - 1) / 2] + data[(n + 1) / 2]) / 2;
    }
}
let m2 = median(sortedArray);

function mode(data) {
    let modeValue = [];
    let counterArray = [];
    let maxFreq = 0;
    for (let i = 0;
        (i < data.length); i++) {
        let counter = 0;
        for (let j = 0; j < data.length; j++) {
            if (data[i] == data[j]) {
                counter++;
            }
        }
        counterArray.push(counter);
    }
    maxFreq = counterArray[0];
    for (let i=0; i<data.length; i++) {
        if (counterArray[i] > maxFreq) {
            maxFreq = counterArray[i];
        }
    }
    for (let i=0; i<data.length; i++) {
        if (counterArray[i] == maxFreq) {
            let index = modeValue.length;
            if (modeValue == "" || (modeValue[index-1] != data[i])) {
                modeValue.push(data[i]);
            }
        }
    }
    return modeValue;
}
let m3 = mode(sortedArray);

console.log(`Mean value: ${m1}\nMedian value: ${m2}\nMode value: ${m3}`);
console.log("===============================================================");