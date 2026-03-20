const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();
const char = [
"c=",
"c-",
"dz=",
"d-",
"lj",
"nj",
"s=",
"z="
]

let str = input;
for(let letter of char){
    str = str.split(letter).join(' ')
}
console.log(str.length)
