const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const number = Number(input);
for(let i = 1; i <= number; i++){
    let space = ' '.repeat(number - i);
    let star = "*".repeat(2 * i - 1)
    console.log(space+star);
}

for( let i = number - 1; i >= 1; i--) {
    let space = ' '.repeat(number - i);
    let star = "*".repeat(2 * i - 1);
    console.log(space+star)
}