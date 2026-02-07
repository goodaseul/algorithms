function solution(n) {
    const arr = [];
    for( let i = 0; i <= 10000; i ++){
        if( i % 3 != 0 && !i.toString().split("").includes('3')){
            arr.push(i)
        }
    }
    return arr[n-1]
}