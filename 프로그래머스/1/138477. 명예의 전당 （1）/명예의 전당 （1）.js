function solution(k, score) {
    let answer = [];
    let result = [];
    
    for( let i = 0; i < score.length; i ++){
        answer.push(score[i])
        answer.sort((a,b) => b-a);
        if( answer.length > k) {
            answer.pop();
        }
        result.push(answer[answer.length - 1])
    }
    return result
}
