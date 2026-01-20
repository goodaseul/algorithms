function solution(number) {
    var answer = [...number].map(Number).reduce((arr, cur) => arr + cur , 0);
    return answer % 9;
}