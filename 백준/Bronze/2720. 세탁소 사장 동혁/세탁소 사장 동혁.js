const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);

const targetNum = input[0]
const coins = [25,10,5,1];

for( let i = 1; i <= targetNum; i ++ ) {
    let target = input[i];
    let counts = [];
    
    for( let coin of coins ){
        let count = Math.floor(target / coin);
        target = target % coin;
        counts.push(count)
    }
    console.log(counts.join(" "))
}