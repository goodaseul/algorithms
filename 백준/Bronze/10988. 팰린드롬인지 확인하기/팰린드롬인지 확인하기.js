const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

console.log( input === [...input].reverse().join("") ? 1 : 0)