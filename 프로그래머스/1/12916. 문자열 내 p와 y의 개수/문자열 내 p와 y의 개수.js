function solution(s){
    let hasP = 0;
    let hasY = 0;
    for( const i of s.toLowerCase()){
        if(i === "p") hasP++;
        if(i === "y") hasY++;
    }
    return hasP === hasY
}
