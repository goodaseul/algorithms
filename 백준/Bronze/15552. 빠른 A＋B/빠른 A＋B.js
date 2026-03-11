const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const num = Number(input[0]);
let result = '';
for( let i = 1; i <= num; i++) {
    const [A,B] = input[i].split(" ").map(Number);
    result += A+B+'\n';    
}
console.log(result)
