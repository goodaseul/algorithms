function solution(myString) {
  var answer = [...myString]
    .map(char => (char < "l" ? "l" : char))
    .join("");
  return answer;
}
