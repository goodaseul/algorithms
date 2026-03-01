function solution(prices) {
    const stack = [];
    const answer = new Array(prices.length).fill(0);
    
    for( let i = 0; i< prices.length; i ++){
        // [1,2,3,2,3] 2 < prices[0]
        while(stack.length && prices[i] < prices[stack[stack.length - 1]] ){
            // 현재값이 이전값보다 작다면? 
            // console.log( stack) // 0,1,2 pop => 0,1
            const prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex;
        }
        // 가격이 떨어지지 않은 인덱스
        stack.push(i) // [0,1,2,3,4]
    }
    while(stack.length > 0) {
        const prevIndex = stack.pop();
        answer[prevIndex] = prices.length - 1 - prevIndex;
    }
    return answer 
}
// 스택 만든다
// answer 배열 만든다
// for 돌린다
// while 조건 적어본다
// pop하고 기간 계산 적어본다