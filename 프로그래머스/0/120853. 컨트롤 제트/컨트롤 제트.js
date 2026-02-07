function solution(s) {
    s = s.split(' ')
    let answer = [];
    for( let i of s){
        if( i === "Z") {
            answer.pop()
        }else {
            answer.push(+i)
        }
    }
    return answer.reduce((acc, cur) => acc + cur, 0)
    
}