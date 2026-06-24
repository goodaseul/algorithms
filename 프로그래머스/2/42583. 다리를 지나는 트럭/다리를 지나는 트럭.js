function solution(bridge_length, weight, truck_weights) {
    // 2 10 [7,4,5,6]
    let result = 0;
    let totalWeight = 0;
    let arr = new Array(bridge_length).fill(0);
    
    while(truck_weights.length > 0 || totalWeight > 0) {
        result++;
        const passedTruck = arr.shift();
        totalWeight -= passedTruck;
        if(truck_weights.length > 0 && totalWeight + truck_weights[0] <=weight) {
            const newTruck = truck_weights.shift();
            arr.push(newTruck);
            totalWeight += newTruck;
        }else{
            arr.push(0)
        }
    }
    
    return result;
}