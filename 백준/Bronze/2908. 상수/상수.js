const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ');
const [A,B] = input;
console.log( Math.max( A.split("").reverse().join(""), B.split("").reverse().join("")));

