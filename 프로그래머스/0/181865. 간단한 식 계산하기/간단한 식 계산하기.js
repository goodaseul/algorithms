function solution(binomial) {
    var answer = 0;
    const parts = binomial.trim().split(/([+\-*])/);
    switch (true) {
        case (parts[1] === "+") :
            answer = Number(parts[0]) + Number(parts[2])
            break;
        case (parts[1] === "-") :
            answer = parts[0] - parts[2]
            break;
        default : 
            answer = parts[0] * parts[2]
     }
    return answer; 
}
