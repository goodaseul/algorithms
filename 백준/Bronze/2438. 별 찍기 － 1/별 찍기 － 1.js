const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

let result = '';
for( let i = 1; i <= Number(input); i ++){
    result += '*'.repeat(i) + '\n'
}
console.log( result);