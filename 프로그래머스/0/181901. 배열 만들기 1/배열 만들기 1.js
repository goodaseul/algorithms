function solution(n, k) {
    var answer = [];
    
    let num = k;
    
    while( num <= n) {
        answer.push(num);
        num += k
    }
    console.log( answer )
    
    return answer;
}