function solution(n) {
    let standardI = 1;
    let sum = 1;
    while( sum * (standardI + 1) <= n){
        standardI++;
        sum *= standardI
    }
    return standardI;
}