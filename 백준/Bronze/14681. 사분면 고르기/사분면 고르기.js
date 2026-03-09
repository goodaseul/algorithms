const fs = require('fs');
const [A, B] = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);

if( A > 0) console.log( B > 0 ? 1 : 4);
else console.log(B > 0 ? 2 : 3)