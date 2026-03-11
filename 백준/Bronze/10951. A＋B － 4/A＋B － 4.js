const fs = require('fs');
const arr = fs.readFileSync(0, 'utf8').trim().split('\n');


for(let line of arr ) {
  const [a, b] = line.split(" ").map(Number);
  console.log( a+ b)
}
