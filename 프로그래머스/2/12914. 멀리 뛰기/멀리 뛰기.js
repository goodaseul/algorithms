function solution(n) {
    if(n <= 2) return n;
    
    let first = 1;
    let second = 2;
    let result = 0;
    
    for( let i = 3; i <= n; i ++) { 
        result = (first + second) % 1234567;
        first = second;
        second = result;
    }
    return result
}