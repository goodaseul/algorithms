const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [N, M] = input[0].split(" ").map(Number);

const arr = Array(N).fill(0);

for( let i = 1; i <= M; i++ ){
    const [I,J,K] = input[i].split(" ").map(Number);
    for( let x = I - 1; x <= J-1; x++) {
        arr[x] = K
    }
}
console.log( arr.join(" ") )