const fs = require('fs');
let [A, B] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

if( B >= 45) {
    B -= 45;
}else {
    A -= 1;
    B = B + 60 - 45;
    if( A < 0) A = 23;
}
console.log(A , B);