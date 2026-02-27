function solution(prices) {
    const stack = [];
    const answer = new Array(prices.length).fill(0);
    console.log( answer );
    
    for( let i = 0; i < prices.length; i++) {
        while(stack.length && prices[i] < prices[stack[stack.length - 1]]){
            // 지금 가격이 이전가격보다 작은가?
            const prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex;
        }
        stack.push(i) // stack 는 인덱스가 쌓임
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