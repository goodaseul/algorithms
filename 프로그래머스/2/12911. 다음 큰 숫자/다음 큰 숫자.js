function solution(n) {
    let targetN = n.toString(2).split("1").length;
    
    let nextTarget = n + 1;
    while(true) {
        let nextCount = nextTarget.toString(2).split("1").length;
        if( targetN === nextCount) {
            break;
        }
        nextTarget++;
    }
    return nextTarget;
}

// 1. N 보다 클 것
// 2. N의 다음 큰 숫자와 N은 2진수의 1의 갯수같음
// 3. 1,2 를 만족하는 가장 작은 수 바로 return