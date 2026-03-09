/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const map = new Map();
    for( let i = 0; i < nums.length; i++ ){
        const needNum = target - nums[i];
        if( map.has(needNum) ) return [map.get(needNum), i];
        map.set(nums[i], i);
    }
};