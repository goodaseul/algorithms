function solution(s) {
  let count = 0;
    let answer = [];
    for( let char of s){
        if( char === " "){
            answer.push(" ");
            count = 0;
        }else {
            answer.push( count % 2 === 0 ? char.toUpperCase() : char.toLowerCase() )
            count ++
        }
    }
    return answer.join("");
}