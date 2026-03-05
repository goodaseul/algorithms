function solution(n) {
    let double = 2;
    let result = [];
    while( double * double <= n ) {
        if( n % double === 0) {
            result.push(double);
            n = n / double;
        }else {
            double++
        }
    }
    if( n > 1)  result.push(n);
    return [...new Set(result)]
}
