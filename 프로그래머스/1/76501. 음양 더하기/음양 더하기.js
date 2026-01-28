// function solution(absolutes, signs) {
//     let answer = absolutes.map((ab, idx) => {
//        return signs[idx] ? ab : -ab
//     })
//     return answer.reduce((acc, cur) => acc + cur, 0)
// }
function solution(absolutes, signs) {
    return absolutes.reduce((acc, cur, idx) => acc += signs[idx] ? cur: -cur 
    , 0)
}