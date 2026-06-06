/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];

    const dfs = (open, close, current) => {
        if(open === 0 && close === 0) {
            result.push(current);
            return;
        }

        if(open > 0) dfs(open - 1, close, current + '(')
        
        if (close > open) dfs(open, close - 1, current + ')')
    }

    dfs(n,n,"")
    
    return result;
};