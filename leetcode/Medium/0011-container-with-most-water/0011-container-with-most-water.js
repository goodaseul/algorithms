/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while(left < right) {
        let width = right - left;
        let minHeight = Math.min(height[left], height[right]);
        let current = width * minHeight;
        maxWater = Math.max(maxWater, current);

        if( height[left] < height[right]) {
            left ++
        }else {
            right--
        }
    }

    return maxWater;
};