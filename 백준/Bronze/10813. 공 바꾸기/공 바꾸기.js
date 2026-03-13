const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [N,M] = input[0].split(' ').map(Number);

const arr = Array.from({length: N}, (_, i) => i+1);
for( let i = 1; i <= M; i ++){
    const [a,b] = input[i].split(" ").map(Number);
    [arr[a-1], arr[b-1]] = [arr[b-1], arr[a-1]]
}
console.log( arr.join(" "))
