function solution(a, b, c) {
    var answer = [a,b,c];
    const arr = new Set(answer);
    let result = arr.size === 1 ? (a + b + c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3)
    : arr.size === 2 ? (a + b + c) * (a**2 + b**2 + c**2) : a + b + c;
    return result
}