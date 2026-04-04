/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = "";
    const expand = (left, right) => {
        while( left >= 0 && right < s.length && s[left] === s[right]){
            left --;
            right ++;
        }
        return s.slice(left + 1, right)
    }
    for( let i = 0; i <s.length; i ++){
        const odd = expand(i, i);
        const even = expand(i, i+1);
        let longer = odd.length > even.length ? odd : even;
        if(longer.length > result.length) result = longer;
    }
    return result;
};

