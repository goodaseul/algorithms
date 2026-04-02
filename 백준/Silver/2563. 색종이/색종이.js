const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const paper = Array.from({ length : 100}, () => Array(100).fill(0))
let paperNum = Number(input[0]); //3

for( let i = 0; i < paperNum; i++) {
    const [x,y] = input[i + 1].split(" ").map(Number);
    for( let row = y; row < y + 10; row++){
        for( let col = x; col < x + 10; col++){
            paper[row][col] = 1
        }
    }
}

let count = 0;
for( let row = 0; row < 100; row++ ) {
    for( let col = 0; col < 100; col++){
        if( paper[row][col] === 1) count++
    }
}
console.log(count)
