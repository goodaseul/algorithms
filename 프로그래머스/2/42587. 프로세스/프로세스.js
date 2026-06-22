function solution(priorities, location) {
    let count = 0;
    const queue = priorities.map((priority, index) => ({
        priority, index,
    }))
    while(queue.length) {
        let current = queue.shift();
        if( queue.some((item) => item.priority > current.priority) ) {
            queue.push(current);
        }else {
            count++;
            
            if(current.index === location) {
                return count
            }
        }
    }
}
