const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ');

const A = Number(input[0]);
const B = Number(input[1]);

console.log(A - B);