const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let result = "";
for( let i = 1; i < input.length; i ++) {
    const [len,word] = input[i].split(" ");
    result += [...word]
        .map(char => char.repeat(Number(len)))
        .join("") + "\n";
}
console.log(result.trim())