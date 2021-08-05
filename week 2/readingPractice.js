"use strict";

const studentRecord = {
    ENG1002:75,
    ENG1003:80,
    ENG1021:98,
    ENG1051:55
};

let grade = {};
for (let i in studentRecord) {
    if (studentRecord[i]>=80) {
        grade[i]="HD";
    } else if (studentRecord[i]>=70 && studentRecord[i]<80) {
        grade[i]="D";
    } else if (studentRecord[i]>=60 && studentRecord[i]<70) {
        grade[i]="C";
    } else if (studentRecord[i]>=50 && studentRecord[i]<60) {
        grade[i]="P";
    } else {
        grade[i]="N";
    }
}

for (let j in studentRecord) {
    console.log(`${j}: ${studentRecord[j]} (${grade[j]})`);
};
