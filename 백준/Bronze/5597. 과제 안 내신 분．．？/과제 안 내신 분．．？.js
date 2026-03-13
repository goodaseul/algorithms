const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);

for(let i = 1; i <= 30; i ++){
    if(!input.includes(i)){
        console.log(i)
    }
}
