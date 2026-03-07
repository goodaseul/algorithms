const fs = require('fs');
const [A, B, C] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);