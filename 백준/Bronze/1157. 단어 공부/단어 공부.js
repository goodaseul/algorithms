const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const word = input.toUpperCase()
const map = new Map();

for( let i = 0; i < word.length; i ++){
    const char = word[i]
    if( map.has(char)){
        map.set(char, map.get(char) + 1);
    }else {
        map.set(char, 1)
    }
}
let max = 0;
let result = '';
let isDuplicate = false;
for (let [key, value] of map) {
    if(value > max) {
        max = value;
        result = key;
        isDuplicate = false;
    }else if (value === max){
        isDuplicate = true;
    }
}
console.log( isDuplicate ? "?" : result)
