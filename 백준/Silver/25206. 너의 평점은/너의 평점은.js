const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const grade = {
    "A+" :	4.5,
    "A0" :	4.0,
    "B+" :  3.5,
    "B0" :  3.0,
    "C+" :	2.5,
    "C0" :	2.0,
    "D+" :  1.5,
    "D0" :  1.0,
    "F"  :	0.0
}

let total = 0;
let totalCredit = 0;

for(let line of input) {
    const [name, credit, g] = line.split(" ");
    if(g === 'P') continue;
    const numCredit = Number(credit);
    total += numCredit * grade[g];
    totalCredit += numCredit;
}

console.log( (total/totalCredit).toFixed(6))
