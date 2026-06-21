function solution(progresses, speeds) {
    const days = progresses.map((progress, index) => 
        Math.ceil((100 - progress) / speeds[index])
    )
    
    const commitAtOnce = [];
    let current = days[0];
    let items = 1;
    
    for(let i = 1; i < progresses.length; i ++) {
        if( days[i] <= current) {
            items++
        }else {
            commitAtOnce.push(items);
            current = days[i];
            items = 1;
        }
    }
    commitAtOnce.push(items)
    return commitAtOnce
}