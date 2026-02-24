function solution(clothes) {
    const map = new Map();
    for( const [_,value] of clothes) {
        map.set(value, (map.get(value) || 0 ) + 1)
    }
    let result = 1;
    for( const value of map.values() ) {
        result *= value + 1
    }
    return result - 1;
}

// 매일 다른 옷 
