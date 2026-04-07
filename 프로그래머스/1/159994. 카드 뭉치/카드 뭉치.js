function solution(cards1, cards2, goal) {
    let card1Pointer = 0;
    let card2Pointer = 0;
    for( let i = 0; i < goal.length; i++) {
        if( cards1[card1Pointer] == goal[i]) {
            card1Pointer++
        }
        else if(cards2[card2Pointer] == goal[i]){
            card2Pointer++
        }else {
            return "No";
        }
    }
    return "Yes";
}