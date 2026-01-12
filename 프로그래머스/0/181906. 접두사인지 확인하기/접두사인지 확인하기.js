function solution(my_string, is_prefix) {
    let answer = 0;
    if (my_string.substring(0, is_prefix.length) === is_prefix) {
        return answer = 1
    }
    return answer;
}