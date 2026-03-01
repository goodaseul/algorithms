function solution(bridge_length, weight, truck_weights) { // 2 / 10 / [7,4,5,6]
    let time = 0;
    let totalWeight = 0;
    let bridge = new Array(bridge_length).fill(0);
    while( truck_weights.length > 0 || totalWeight > 0 ) {
        // truck_weight 가 있고, 토탈 weight 가 weight 보다 작거나 같을때까지
        time++;
        const passedTruck = bridge.shift();
        totalWeight -= passedTruck;
        
        if( truck_weights.length > 0  && totalWeight + truck_weights[0] <= weight) {
            const newTruck = truck_weights.shift();
            bridge.push(newTruck);
            totalWeight += newTruck;
        }else {
            bridge.push(0)
        }
    }
    return time
}