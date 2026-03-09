/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    return x === Number([...String(x)].reverse().join("")) ? true : false
};