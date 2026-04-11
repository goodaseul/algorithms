const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

console.log((2 ** Number(input) + 1) ** 2)