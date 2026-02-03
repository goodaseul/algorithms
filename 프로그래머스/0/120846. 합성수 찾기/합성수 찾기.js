function solution(n) {
    var answer = 0; // 합성수 
    for( let i = 1; i <= n; i++){
        let divisors = 0; // 약수
        for( let j = 1; j <= i; j++){
            if( i % j === 0){
                divisors++
            }
        }
        if( divisors >= 3) answer ++
    }
    return answer
}