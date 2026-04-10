/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let i = 0; i < 9; i ++){
        let rowCheck = new Set(); 
        let colCheck = new Set();
        let allCheck = new Set();
        for (let j = 0; j < 9; j++) {
            if( board[i][j] !== "." ) {
                if( rowCheck.has(board[i][j]) ) return false;
                rowCheck.add(board[i][j])
            }
            if( board[j][i] !== "." ) {
                if( colCheck.has(board[j][i])) return false;
                colCheck.add(board[j][i])
            }

            let rowIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            let colIndex = 3 * (i % 3) + (j % 3);
            let allValue = board[rowIndex][colIndex];

            if (allValue !== ".") {
                if (allCheck.has(allValue)) return false;
                allCheck.add(allValue);
            }
        }
    }
    return true
};
