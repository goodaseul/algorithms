const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

let target = 1;
let i = 1;
while(target < Number(input)) {
    target += 6 * i
    i++
}

console.log(i)