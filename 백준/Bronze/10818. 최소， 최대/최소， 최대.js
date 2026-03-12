const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const numbers = input[1].split(" ").map(Number);
const max = Math.max(...numbers);
const min = Math.min(...numbers);

console.log(min, max)