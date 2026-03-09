/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    strs.sort();
    const first = strs[0];
    const last = strs[strs.length - 1];
    let i = 0;
    while( i < first.length && first[i] === last[i]) {
        i += 1
    }
    return first.slice(0,i)
};