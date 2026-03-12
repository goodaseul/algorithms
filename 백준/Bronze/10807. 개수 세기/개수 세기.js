const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const arr = input[1].split(' ').filter((num) => num === input[2])

console.log( arr.length )
