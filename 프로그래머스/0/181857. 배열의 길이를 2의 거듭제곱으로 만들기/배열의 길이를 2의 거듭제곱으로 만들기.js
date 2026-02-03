function solution(arr) {
    let size = 1;
    
    while( size < arr.length) { 
        size *= 2 
    }
    while (arr.length < size){
        arr.push(0)
    }
    
    return arr
}