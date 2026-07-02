function solution(progresses, speeds) {
    let answer = [];
    let days = progresses.map((progress, idx) => {
        return Math.ceil((100 - progress) / speeds[idx]);
    }) 
    let current = days[0]; 
    let count = 1;
    
    for(let i = 1; i < progresses.length; i ++){
        if( days[i] <= current ){
            count ++;
        }else {
            answer.push(count);
            current = days[i];
            count = 1
        }
    }
    
    answer.push(count)
    return answer;
}