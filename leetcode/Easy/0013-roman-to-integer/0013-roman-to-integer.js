/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const chars = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000,
    }
    let sum = 0;
    for( let i = 0; i < s.length; i ++){
        const curr = chars[s[i]]
        const next = chars[s[i+1]]
        if( next && curr < next){
            sum -= curr;
        }else { 
            sum += curr;
        }
    }    
    return sum
};