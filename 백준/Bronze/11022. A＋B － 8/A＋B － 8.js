const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const len = Number(input[0]);
let result = '';
for( let i = 1; i <= len; i++){
    const [A,B] = input[i].split(' ').map(Number);
    result += `Case #${i}: ${A} + ${B} = ${A+B}\n`
}
console.log( result)