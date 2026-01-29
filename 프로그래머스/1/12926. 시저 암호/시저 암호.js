function solution(s, n) {
    var answer = s.split("").map((char) => {
        if( char === " ") return " ";
        const base = char.toUpperCase() === char ? 65 : 97;
        return String.fromCharCode(((char.charCodeAt(0) - base + n) % 26) + base);
    }).join("")
    return answer;
}

