function solution(n) {
    var answer = 0;
    const sqrt = Math.sqrt(n);
    if( Number.isInteger(sqrt)){
       return answer = (sqrt + 1) * (sqrt + 1)
    }
    return -1
}