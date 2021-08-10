"use strict";

// question 1
let data1 = [
    {
      unit: "eng0001",
      sem: 1,
      year: 2000,
      grade: "HD",
      mark: 92
    },
    {
      unit: "eng0002",
      sem: 1,
      year: 2000,
      grade: "N",
      mark: 41
    },
    {
      unit: "eng0003",
      sem: 2,
      year: 2000,
      grade: "C",
      mark: 65
    },
    {
      unit: "eng0004",
      sem: 2,
      year: 2000,
      grade: "D",
      mark: 81
    },
  ];
let id=1;
console.log(`${data1[id].unit} was attempted in semester ${data1[id].sem} in the year ${data1[id].year}`);

// question 2
let A = false; 
let B = true; 
let C = false;

let condition = !A && !C && !A&&B && !C&&B;
console.log(Boolean(condition));

//question 3
let date1 = new Date(2019,12,11);
let date2 = new Date(2020,11,21);
let diff = date2 - date1;
diff = diff / Math.pow(10,3) / 3600 / 24;
console.log(`The number of days between 10/11/2019 and 20/10/2020 is ${diff}`);

//question 4
let data4 = [
	372, -659, 339, -781, 351, 531, 709, 16, -899, -18, -649,
	907, 769, -666, 884, -475, 45, 225, -188, -50, -449, 483,
	978, 837, -724, 131, -365, -984, -601, -526, 346, -665, 
	188, 273, 979, -62, 513, 995, -536, 276, -934, -110, 931, 
	-170, -680, -468, 810, 21, 922, -968, -391, 6, 246, 759, 
	-114, -457, -603, -132, -880, -23, 164, -494, -61, 676, 
	-941, 788, -911, 449, -708, 989, 833, 621, -389, -197, -53, 
	-52, 215, -898, 795, -487, 109, 257, 293, -500, 852, 195, 
	-348, -954, 970, 501, -870, 653, 564, 522, -948, -793, 796, 
	-913, 617, -756
];

let data4a = {};
data4a.positive = [];
data4a.negative = [];

for (let i=0; i<data4.length; i++) {
    if (data4[i] >= 0) {
        data4a.positive.push(data4[i]);
    } else {
        data4a.negative.push(data4[i]);
    }
}

console.log(data4a);