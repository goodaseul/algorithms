// function solution(participant, completion) {
//     participant.sort();
//     completion.sort();
//     for( let i = 0; i < participant.length; i++){
//         if( participant[i] !== completion[i]){
//             return participant[i]
//         }
//     }
// }

function solution(participant, completion) {
    // 해시
    const map = new Map();
    for(const name of participant){
        map.set(name, (map.get(name) || 0) + 1)
    }
    for (const name of completion){
        map.set(name, map.get(name) - 1)
    }
    for( const [name, count] of map){
        if (count > 0) return name;
    }
}