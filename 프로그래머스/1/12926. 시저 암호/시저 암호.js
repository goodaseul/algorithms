function solution(s, n) {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return [...s].map(char => {
        if (char === " ") return " "
        let idx = lower.indexOf(char);
        if (idx !== -1) {
        return lower[(idx + n) % 26];
    }

        idx = upper.indexOf(char);
        if (idx !== -1) {
          return upper[(idx + n) % 26];
        }

        return char;
      }).join("");
}

