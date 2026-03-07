function solution(my_string, queries) {
    let str = [...my_string];
    queries.forEach(([s, e]) => {
        while(s < e) {
            [str[s], str[e]] = [str[e], str[s]]
            s++;
            e--;
        }
    })
    return str.join("")
}
