function solution(my_string) {
    var answer = 0;
    let splitStr = my_string.split(/[A-Za-z]/).filter((char) => char);
    for ( let i of splitStr ) {
        answer += Number(i)
    }
    return answer;
}