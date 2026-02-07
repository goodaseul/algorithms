function solution(n) {
   // let answer = 0;
    // for ( let i = 0; i <= n; i ++) {
    //     if ( i % 2 === 0) answer += i;
    // }
    return Array(n).fill().map((_,index) => index+1).filter((value) => value % 2 === 0).reduce((acc,cur) => acc + cur, 0)
}