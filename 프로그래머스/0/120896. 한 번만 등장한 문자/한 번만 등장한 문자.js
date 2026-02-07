function solution(s) {
    return [...s].filter((ch) => s.indexOf(ch) === s.lastIndexOf(ch)).sort().join("");
}