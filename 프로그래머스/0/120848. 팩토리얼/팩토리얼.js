function solution(n) {
    let count = 1;
    let factorial = 1;
    
    while( factorial <= n) {
        count += 1;
        factorial *= count
    }
        
    return count - 1;
}