function solution(numlist, n) {
    let newArr = [];
    numlist.sort((a,b) => a-b)
    let right = numlist.findIndex(index => index > n); //n보다 큰 인덱스
    if(right === -1) right = numlist.length;
    let left = right - 1;
    
    while(left >= 0 && right < numlist.length){
        // n에서 얼마나 먼지
        const leftDiff = Math.abs(numlist[left] - n) 
        const rightDiff = Math.abs(numlist[right] - n);
        if(leftDiff > rightDiff) {
            newArr.push(numlist[right++])
        }else if(leftDiff < rightDiff) {
            newArr.push(numlist[left--])
        }else {
            newArr.push(numlist[right++])
        }
    }
    
    // 왼쪽이 먼저 끝나게 되면?
    while( right < numlist.length) newArr.push(numlist[right++])
    // 오른쪽이 먼저 끝나게 되면?
    while( left >= 0) newArr.push(numlist[left--])
    return newArr
}
