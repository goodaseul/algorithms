function solution(myString) {
    var answer = myString.split("x").filter((removeString) => removeString !== "").sort();
    return answer;
}