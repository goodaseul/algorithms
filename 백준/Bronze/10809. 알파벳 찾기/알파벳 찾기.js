const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

let result = "";

for( let i = 0; i < 26; i ++) {
    const alphabet = String.fromCharCode(97 + i);
    result += input.indexOf(alphabet) + " ";
}
console.log( result )