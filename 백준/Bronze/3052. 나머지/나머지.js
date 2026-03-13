const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const set = new Set(input.map(v => v % 42));
console.log(set.size)