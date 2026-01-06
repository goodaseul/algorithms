function solution(a, b) {
    var answer = 0;
    const plus = String(a) + String(b);
    const multiple = 2 * a * b;
    answer = Math.max(Number(plus), multiple)
    return answer;
}