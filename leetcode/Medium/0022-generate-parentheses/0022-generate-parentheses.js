/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    function dfs (open, close, current) {
       
        if( open === 0 && close === 0) {
            return result.push(current);
        }

        if(open > 0) {
            dfs(open - 1, close, current + "(")
        }
        if(close > open) {
            dfs(open, close -1, current + ")")
        }

    }
    dfs(n,n, "")

    return result
};