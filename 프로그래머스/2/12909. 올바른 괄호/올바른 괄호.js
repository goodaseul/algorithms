function solution(s){
    let count = 0;
    for(const char of s){
        if(count < 0) {
            return false
        }
        if( char === "(") {
            count++
        }else if( char === ")") {
            count--
        }
    }
    const result = count ===  0 ? true : false
    return result
}