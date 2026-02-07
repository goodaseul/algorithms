function solution(score) {
    const sum = score.map((value) => value[0] + value[1]);
    const sortArr = [...sum].sort((a,b) => b - a)
    return sum.map((result) => sortArr.indexOf(result) + 1)
}