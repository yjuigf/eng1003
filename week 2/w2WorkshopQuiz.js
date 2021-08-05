//question 1

let data1 = {
    y:1,
    s:1,
    units: [
        {
            c:1,
            g:1,
            m:1
        },
        {
            c:2,
            g:2,
            m:2
        }
    ]
}

console.log(data1.units[1].m)

//question 4

let data2 = [
    538, 922, "725", false, 733, 170, 294, "336", false, "538", 
    79, 390, true, "816", "50", 920, "845", "728", "133", 
    "468", false, true, 520, 747, false, "540", true, true, 
    "262", 625, "614", 316, "978", "865", "506", 552, 187, 
    "444", 676, 544, 840, 691, "50", 21, "926", "10", 37, 
    "704", "36", 978, 830, 438, true, "713", 497, "371", 243, 
    638, 454, 291, "185", "941", "581", 336, 458, "585", false, 
    870, "639", "360", 599, "644", "767", 878, "646", 117, 
    "933", 48, 934, "155", "749", 808, 922, 94, "360", "395", 
    false, 407, true, false, "97", "233", 70, "609", false, 
    false, "13", "698", 797, "789"
  ];
  
  let number = [];
  let string = [];
  let boolean = [];

  for (let i=0; i<data2.length; i++) {
      if (typeof(data2[i])=="number") {
        number += `${data2[i]}\n`;
      } else if (typeof(data2[i])=="string") {
          string += `${data2[i]}\n`;
      } else if (typeof(data2[i])=="boolean") {
        boolean += `${data2[i]}\n`;
    }
  }

  console.log(number);
  console.log(string);
  console.log(boolean);

//question 5

let data3 = [2499, 6514, 2697, 9593, 6800, 9, 656, 7479, 6433, 5063, 3254, 6751, 1236, 9794, 347, 7389, 899, 8102, 9860, 9825];

max = Math.max(...data3);
min = Math.min(...data3);

console.log(`The highest number is ${max}\n`);
console.log(`The lowest number is ${min}\n`);