const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const A = Number(input[0]);
const B = input[1];

console.log(A * Number(B[2]))
console.log(A * Number(B[1]))
console.log(A * Number(B[0]))
console.log(A * Number(B))


