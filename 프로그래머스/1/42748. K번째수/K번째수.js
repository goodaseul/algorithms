function solution(array, commands) {
    var answer = [];
    commands.forEach(([i,j,k]) => {
        const sliced = array.slice(i - 1, j).sort((a , b) => a -b);
        answer.push( sliced [k - 1])
    })
    
    return answer;
}