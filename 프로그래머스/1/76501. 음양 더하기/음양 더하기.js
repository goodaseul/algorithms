function solution(absolutes, signs) {
    let answer = absolutes.map((ab, idx) => {
       return signs[idx] ? ab : -ab
    })
    return answer.reduce((acc, cur) => acc + cur, 0)
}