function solution(n, control) {
  let answer = n;
  [...control].forEach((letter) => {
      switch(letter) {
          case "w" :
            answer += 1
            break;
          case "s" :
            answer -= 1
            break;
          case "d" :
            answer += 10
            break;
          default :
            answer -=10
      }
  });
  return answer;
}