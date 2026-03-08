function solution(arr, queries) {
    let result = [];
    
    queries.forEach(([s,e,k]) => {
        const filtered = arr.slice(s, e + 1).filter((value) => value > k);
        if( filtered.length === 0 ){
            result.push(-1);
        }else {
            result.push(Math.min(...filtered))
        }
    })
    
    return result;
}