function solution(bridge_length, weight, truck_weights) { // 2 / 10 / [7,4,5,6]
    let time = 0;  // 총 시간
    let totalWeigth = 0; // 현재 다리 위 총 무게
    let bridge = new Array(bridge_length).fill(0); // 다리 상태 (고정 길이)
    while(truck_weights.length > 0 || totalWeigth > 0) {
        time++;
        const passedTruck = bridge.shift();
        totalWeigth -= passedTruck;
        // ex.0 - 7 => -7
        if (
          truck_weights.length > 0 &&
          totalWeigth + truck_weights[0] <= weight
        ) {
          const newTruck = truck_weights.shift();
          bridge.push(newTruck);
          totalWeigth += newTruck;
        } else {
            // 대기 트럭이 없을 때, 
            // 무게 초과라서 못 올릴 때 
            // 결국 빈자리를 표현
          bridge.push(0);
        }
    }
    return time
}