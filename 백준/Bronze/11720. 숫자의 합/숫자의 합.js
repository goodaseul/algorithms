const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const len = Number(input[0]);
const num = input[1].split("").map(Number);
let sum = 0;
for( let i = 0; i <len; i ++) {
    sum += num[i];
}
console.log(sum)