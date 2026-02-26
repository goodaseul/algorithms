function solution(progresses, speeds) {
    const days = progresses.map((progress, index) => 
        Math.ceil((100 - progress) / speeds[index])                           
    );
    const result = [];
    let current = days[0]
    let count = 1;
    // count 2 
    for(let i = 1; i < progresses.length; i++){
        if( days[i] <= current) {
            count++
        }else{
            result.push(count); // 2
            current = days[i]; // 현재 바뀜
            count = 1; // count 다시 1 
        }
    }
    result.push(count); // 마지막은 비교군이 없음
    return result;
}

