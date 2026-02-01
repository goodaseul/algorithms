function solution(a, b, n) {
    let answer = 0;
    while( n >= a) {
        const exchanged = Math.floor(n / a);
        answer += exchanged * b;
        n = (n % a)  + exchanged * b
    }
    return answer
}