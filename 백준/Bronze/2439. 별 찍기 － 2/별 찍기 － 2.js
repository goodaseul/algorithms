const fs = require('fs');
const input = Number(fs.readFileSync(0, 'utf8').trim());

let result = '';
for( let i = 1; i <= input; i++){
    result += " ".repeat(input - i) + '*'.repeat(i) +'\n'
}
console.log( result )