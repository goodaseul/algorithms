const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const len = input[0];
for( let i = 1; i <= len; i ++) {
    const [A,B] = input[i].split(' ').map(Number);
    console.log(A+B)
}