function solution(progresses, speeds) {
    const days = progresses.map((progress, index) => 
         Math.ceil((100 - progress) / speeds[index])
    )
    const dayArr = [];
    let current = days[0];
    let count = 1;
    for( let i = 1; i < days.length; i ++){
        if( days[i] <= current ){
            count ++;
        }else { 
            dayArr.push(count);
            current = days[i]
            count = 1;  
        }
    }
    dayArr.push(count);
    return dayArr
}

