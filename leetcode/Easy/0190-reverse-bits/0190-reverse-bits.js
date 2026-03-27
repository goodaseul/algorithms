/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    const str = n.toString(2).padStart(32,'0');
    const reversed = str.split('').reverse().join("");
    return parseInt(reversed, 2)
};