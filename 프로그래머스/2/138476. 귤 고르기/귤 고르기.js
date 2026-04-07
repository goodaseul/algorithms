function solution(k, tangerine) {
    const map = new Map();
    for( let tangLen of tangerine ){
        map.set(tangLen, (map.get(tangLen) || 0) + 1);
    }
    const counts = [...map.values()].sort((a,b) => b- a);
    
    let result = 0;
    let sum = 0;
    
    for (let count of counts) {
        sum += count;
        result++;
        if (sum >= k) break;
    }
    
    return result;
}