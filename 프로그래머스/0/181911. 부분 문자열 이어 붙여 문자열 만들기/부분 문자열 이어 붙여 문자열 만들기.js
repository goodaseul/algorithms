function solution(my_strings, parts) {
    var answer = '';
    my_strings.map((string,index) => (
        answer += ([...string].slice(parts[index][0], parts[index][1] + 1).join(""))
    ))
    return answer;
}