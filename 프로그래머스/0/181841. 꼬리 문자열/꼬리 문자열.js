function solution(str_list, ex) {
    var answer = str_list.filter((char) => !char.includes(ex)).join("")
    return answer;
}