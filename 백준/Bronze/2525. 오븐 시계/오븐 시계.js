const fs = require('fs');
const [A, B, C] = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let total = A * 60 + B + C;
let hours = Math.floor(total / 60) % 24
let minutes = total % 60
console.log( hours, minutes )
                                                        