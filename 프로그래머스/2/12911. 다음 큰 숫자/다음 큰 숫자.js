function solution(n) {
    let checkOne = n.toString(2).split("1").length - 1;
    let next = n + 1;
    
    while(true) {
        let checkNext = next.toString(2).split("1").length - 1;
        if( checkNext === checkOne) {
            return next;
        }
        next++
    }
}