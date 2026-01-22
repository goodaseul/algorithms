function solution(start_num, end_num) {
    var answer = [];
    let start = start_num;
    while( start >= end_num){
        answer.push( start)
        start -= 1
    }
    
    return answer;
}