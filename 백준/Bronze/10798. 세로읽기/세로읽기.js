const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let maxLen = Math.max(...input.map(row => row.length))
let word = "";
for( let i = 0 ; i < maxLen; i ++ ) {
    for( let j = 0; j < input.length; j ++ ) {
        if(input[j][i]) word += input[j][i]
    }
} 
console.log(word)