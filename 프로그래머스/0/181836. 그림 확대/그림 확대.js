function solution(picture, k) {
    let result = ""; 
    let arr = [];
    for( let line of picture ) {
        result = line.split("").map( char => char.repeat(k) ).join("")
        
        for (let i = 0 ; i < k; i ++) {
            arr.push(result);   
        }
    }
    
    return arr;
}

