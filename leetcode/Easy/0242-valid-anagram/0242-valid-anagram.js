/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const map = new Map();
    for( let letter of s){
        map.set(letter, (map.get(letter) || 0) + 1);
    }
    for( let letter of t) {
        const count = map.get(letter);
        if(!count) return false
        map.set(letter, count - 1)
    }
    return true
};