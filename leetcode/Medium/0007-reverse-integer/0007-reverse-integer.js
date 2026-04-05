/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let minus = x < 0;
    let str = Math.abs(x).toString();
    let reversedStr = str.split("").reverse().join("");
    let result = Number(reversedStr);

    if(minus) result = -result;

    if(result < -(2**31) || result > 2**31 -1 ) return 0
    return result
};