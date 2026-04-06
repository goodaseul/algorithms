/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let letter = "";
    let tempSign = "";
    for(const char of s ) {
        if (char === " " && letter === "" && tempSign === "") continue;
        if( letter === "" && tempSign === "" && 
        (char === "-" || char === "+")) {
            tempSign = char;
            continue;
        };
        if( char >= '0' && char <= '9') {
            letter += char
        }else break;
    }
    if( letter === "") return 0;
    let num = Number(tempSign + letter);
    const max = 2**31 - 1;
    const min = -(2**31);
    if( num > max) return max;
    if( num < min) return min
    return num;
};