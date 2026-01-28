function solution(s){
    var answer = true;
    const letter = s.toLowerCase();
    let pLength = 0;
    let yLength = 0;
        
    for( let i = 0; i < letter.length; i++){
        if( letter[i] === "p") pLength += 1;
        if( letter[i] === "y") yLength += 1;
    }
    
    return pLength === yLength ? true : false ;
}