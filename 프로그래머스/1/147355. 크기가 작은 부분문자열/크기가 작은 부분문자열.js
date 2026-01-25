function solution(t, p) {
    var answer = 0;
    let standard = p.length;
    for(let i = 0; i <= t.length - standard; i++){
        let target = t.slice(i, i + standard);
        if( target <= p){
            answer += 1
        }
    }
   
    return answer;
}