function solution(myString, pat) {
    var answer = 0
    const change = [...myString].map((char) => char === "A" ? "B" : "A").join("")
    answer = change.includes(pat) ? 1 : 0
    return answer;
}