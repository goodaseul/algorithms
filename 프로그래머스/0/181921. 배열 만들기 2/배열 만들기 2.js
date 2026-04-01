function solution(l, r) {
    let answer = [];
    for( let i = l; i <= r; i ++) {
        let str = String(i);
       if( [...str].every((s) => s === "0" || s ==="5")){
           answer.push(i)
       }
    }
    return answer.length ? answer : [-1];
}