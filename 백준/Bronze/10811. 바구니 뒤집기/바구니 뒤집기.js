const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const [N, M] = input[0].split(" ").map(Number);
const arr = Array.from({length: N},(_, i) => i+ 1);

for( let i = 1; i <= M; i ++){
    const [a,b] = input[i].split(" ").map(Number);
    let left = a-1;
    let right = b-1;
    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left ++;
        right --;
     }
 }
console.log(arr.join(" "))