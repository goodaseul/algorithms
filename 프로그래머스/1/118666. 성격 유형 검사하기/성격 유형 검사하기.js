function solution(survey, choices) {
    const map = new Map();
    for(const [index, type] of survey.entries()) {
        const [first,second] = type.split("");
        const choice = choices[index];
        if(choice < 4) {
            map.set(first, (map.get(first) || 0) + (4 - choice));
        }else if( choice > 4){
            map.set(second, (map.get(second) || 0) + (choice - 4));
        }
    }
    let answer = '';
    const personal = ["RT", "CF", "JM", "AN"]
    for( const p of personal) {
        const [first, second] = p.split("");
        const firstScore = map.get(first) || 0;
        const secondScore = map.get(second) || 0;
        if(firstScore >= secondScore) {
            answer += first;
        }else {
            answer += second;
        }
    }
    return answer;
}
