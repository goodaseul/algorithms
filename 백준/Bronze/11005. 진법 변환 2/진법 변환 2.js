const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ');

const [result, num] = input.map(Number);
console.log( result.toString(num).toUpperCase() )