function solution(d, budget) {
    var answer = 0;
    let sum = budget;
    
    d.sort((a,b) => a - b);
    
    for( let i = 0; i < d.length; i++){
        
        if( sum >= d[i]){
            sum -= d[i];
             answer ++
        }
        else {
            return answer
        }
    }
    return answer;
}