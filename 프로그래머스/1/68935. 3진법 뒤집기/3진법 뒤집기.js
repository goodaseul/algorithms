function solution(n) {
    var answer = parseInt(n.toString(3).split("").reverse().join("").toString(10), 3);
    console.log(answer)
    return answer;
}