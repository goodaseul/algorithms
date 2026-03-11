const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

console.log("long ".repeat(input / 4) + `int`)
