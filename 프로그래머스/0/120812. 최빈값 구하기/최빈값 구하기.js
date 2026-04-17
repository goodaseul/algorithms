function solution(array) {
    const map = new Map();
    for( let num of array){
        map.set(num, (map.get(num) || 0) + 1)
    }
    
    let maxCount = 0;  
    let answer = -1;   
    let isDuplicate = false;
    for(let [num, count] of map){
        if(count > maxCount) {
            maxCount = count;
            answer = num;
            isDuplicate = false;
        }else if(count === maxCount){
            isDuplicate = true;
        }
    } 
    return isDuplicate ? -1 : answer;
}