/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    
    const set = new Set();
    let left = 0;
    let max = 0;
    for( let right = 0 ; right < s.length; right ++ ){
        while(set.has(s[right])){
            set.delete(s[left]); 
            left++ 
        }
        set.add(s[right]) 
        // "a" => "a,b" => "a,b,c" => "b,c,a" => "c,a,b" => "a,b,c" => "b,c" => "c,b" => "b";
        max = Math.max(max, set.size)
    }
    return max;
};
