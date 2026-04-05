/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) return s
    let newArr = Array(Math.min(numRows, s.length)).fill("");

    let currentRow = 0;
    let goingDown = false;

    for(const c of s){
        newArr[currentRow] += c
        if(currentRow === 0 || currentRow === numRows - 1) goingDown = !goingDown;
        currentRow += goingDown ? 1 : -1;
    }
    return newArr.join("")
};