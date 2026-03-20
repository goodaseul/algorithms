const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = Number(input[0]);
let count = 0;

for( let i = 1; i <= n; i++){
    let word = input[i];
    let set = new Set();
    let prev = '';
    let isGroup = true;
    
    for( let char of word) {
        if(char !== prev ){
            if(set.has(char)) {
                isGroup =false
                break;
            }
            set.add(char)
        }
        prev = char
    }
    if(isGroup === true) count ++
}

console.log(count)