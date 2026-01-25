function solution(s) {
    var answer = 0;
    let correct = 0;
    let different = 0;
    let target = s[0];
    
    for( let i = 0; i < s.length; i++) {
        
        if( target === s[i]) {
            correct += 1;
        } else {
            different += 1;
        }
        if( correct === different)    {
            target = s[i+1]
            answer += 1
            correct = 0;
            different = 0;
        }     
    }
    if( correct !== different)    {
        answer += 1
    }     
    

    return answer;
}