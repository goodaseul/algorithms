function solution(num_list) {
    let count = 0;
    
    for( let i of num_list){
        while( i !== 1){
            if( i % 2 === 0){
                i = i / 2
            }else {
                i = (i-1) /2
            }
            count++
        }
    }
    return count;
}