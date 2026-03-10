const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split("\n");
const sum = Number(input[0]);
const len = Number(input[1]);
let result = 0;
for( let i = 2; i < 2 + len; i ++) {
    const [A, B] = input[i].split(" ").map(Number);
    result += A*B;    
}
console.log( result === sum ? "Yes" : "No")
