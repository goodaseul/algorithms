const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let result = "";
for( let i = 1; i <= input[0]; i++) {
    let word = input[i];
 
    result += word[0] + word[word.length - 1] + "\n"
}

console.log( result )