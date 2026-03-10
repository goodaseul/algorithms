const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

for( let i = 1; i <= 9; i ++) {
    console.log( `${input} * ${i} = ${input * i }`)
}