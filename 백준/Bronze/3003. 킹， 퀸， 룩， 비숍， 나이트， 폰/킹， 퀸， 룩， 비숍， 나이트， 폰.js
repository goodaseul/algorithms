const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ');

const original = [1,1,2,2,2,8];
let hasPiece = [];

for( let i = 0; i < input.length; i ++) {
    hasPiece.push(original[i] - input[i]);
    
}
console.log( hasPiece.join(' ') )