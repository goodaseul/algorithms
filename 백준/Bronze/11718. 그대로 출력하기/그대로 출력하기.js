const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let reprint = "";
for( let i = 0; i < input.length; i++){
  reprint += input[i]+"\n"
}
console.log(reprint)