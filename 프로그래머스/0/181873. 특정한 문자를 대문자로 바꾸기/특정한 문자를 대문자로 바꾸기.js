function solution(my_string, alp) {
    var answer = [...my_string].map((letter) => letter === alp ? letter.toUpperCase() : letter).join("")  
    return answer;
}