function solution(q, r, code) {
    let answer = '';
    [...code].forEach((_,idx) => {
        if( idx % q === r){
            answer += code[idx]
        }
    })
    return answer;
}