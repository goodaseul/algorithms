const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

console.log( input === "" ? 0 : input.split(" ").length)