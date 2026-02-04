function solution(array, n) {
    // 기준 그냥 처음꺼 잡기
    let answer = array[0];
    let minDiff = Math.abs(array[0] - n);
    // 하나씩 비교
    for( let i of array ){
        const diff = Math.abs(i - n);
        if( minDiff > diff || diff == minDiff && i < answer) {
            answer = i
            minDiff = diff
        }
    }
    return answer;
}