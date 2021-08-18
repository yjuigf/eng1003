"use strict";

function calculate() {
    
    let resultBMI = document.getElementById("BMI");
    let resultRating = document.getElementById("rating");

    let height = document.getElementById("height");
    let weight = document.getElementById("weight");

    let userHeight = height.value;
    let userWeight = weight.value;

    let userBMI = userWeight / Math.pow(userHeight/100,2);
    console.log(userHeight);
    console.log(userWeight);
    console.log(userBMI);
    resultBMI.innerHTML = "Your body mass index (BMI) is: " + userBMI.toFixed(2);

    let rating = "";
    if (userBMI < 18.5) {
         rating = "Underweight";
    } else if (userBMI >= 18.5 && userBMI < 24.9) {
        rating = "Normal Weight";
    } else if (userBMI >= 25 && userBMI < 30) {
        rating = "Overweight";
    } else {
        rating = "Obese";
    };

    resultRating.innerHTML = "You are " + rating;
};

let buttonRef = document.getElementById("run");
buttonRef.addEventListener("click", calculate);