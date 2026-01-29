function solution(s) {
  const answer = [];
  const lastIndex = {};

    [...s].forEach((letter, i) => {
        if( lastIndex[letter] === undefined){
            answer.push(-1)
        }else {
            answer.push( i - lastIndex[letter])
        }
        lastIndex[letter] = i // 계산이 끝나고나서 저장
    })

  return answer;
}
