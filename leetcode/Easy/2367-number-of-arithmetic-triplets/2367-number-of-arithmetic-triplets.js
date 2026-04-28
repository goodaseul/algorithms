/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let count = 0;
    const set = new Set(nums);

    for (let num of nums) {
        const second = num + diff;
        const third = num + (2 * diff)
        if(set.has(second) && set.has(third)) {
            count++
        }
    }
    return count;

};
