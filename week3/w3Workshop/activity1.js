"use strict";

function haversine(lat1, long1, lat2, long2) {
    //convert everything to radians
    lat1 *= Math.PI / 180;
    long1 *= Math.PI / 180;
    lat2 *= Math.PI / 180;
    long2 *= Math.PI / 180;
    
    //find the differences in latitude and longitude
    let lat = Math.abs(lat2 - lat1);
    let long = Math.abs(long2 - long1);

    //define components, calculate distance
    let R = 6371; 
    let a = Math.pow(Math.sin(lat/2),2) + Math.cos(long1) * Math.cos(long2) * Math.pow(Math.sin(long/2),2);
    let c = 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
    let d = R * c;

    //output
    return d;
}

console.log(haversine(-37.924465, 145.120693,-37.910028, 145.135274));
console.log(haversine(-37.670215, 144.849731,-37.910028, 145.135274));