function solution(strArr) {
    const count = {}
    // 길이 별로 개수 세기 = 해시
    for( let str of strArr) {
        const len = str.length;
        count[len] = (count[len] || 0) + 1;
    }
    return Math.max(...Object.values(count))
}

