const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let maxVal = -1;
let maxRow = 0;
let maxCol = 0;

const matrix = input.map(line => line.split(" ").map(Number))

for(let i = 0; i< 9; i++) { // 행
    for(let j = 0; j< 9; j++) { // 열
        if(matrix[i][j] > maxVal) {
            maxVal = matrix[i][j];
            maxRow = i + 1;
            maxCol = j + 1;
        }
    }
}
console.log(maxVal)
console.log(`${maxRow} ${maxCol}`)