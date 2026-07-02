function solution(s){
    let count = 0;
    
    for( const roundB of s) {
        if( roundB === "(")  count ++
        else if( roundB === ")") count --
        
        if( count < 0 ) return false
    }

    return count === 0;
}