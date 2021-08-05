"use strict";

const SEQ_MAX_LENGTH = 50; //length of sequence

let output = []; 
//define first two terms
output[0] = 0; 
output[1] = 1;

//iterate through the required number of terms of the sequence
for (let i=2; i<SEQ_MAX_LENGTH; i++) {
    output[i] = output[i-2]+output[i-1]; //next term is the sum of the two previous
}

console.log(output);