function solution(brown, yellow) {
    let total = brown + yellow;
    for(let h = 1; h <= total; h ++){
        if( total % h  !== 0) continue;
        
        let w = total / h;
        
        if((w-2) * (h-2) === yellow){
           return [w,h]
        }
    }
}

// BBBB
// BYYB
// BBBB


