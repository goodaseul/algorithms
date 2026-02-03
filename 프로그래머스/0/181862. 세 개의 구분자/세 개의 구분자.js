function solution(myStr) {
    var answer = [];
    let start = 0;
    myStr.split("").forEach((char, idx) => {
        if( char === "a" || char === "b" || char === "c")  {
             if (start < idx) {
                answer.push(myStr.slice(start, idx));
            }
            start = idx + 1;
        }
    })
     if (start < myStr.length) {
        answer.push(myStr.slice(start));
    }
    
    if(answer.length === 0) {
        answer.push("EMPTY")
    }
    
    return answer;
}