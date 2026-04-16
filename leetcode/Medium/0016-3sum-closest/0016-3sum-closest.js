/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a- b);
    let closet = nums[0] + nums[1] + nums[2];

    for(let num = 0; num < nums.length - 2; num++){
        let left = num + 1;
        let right = nums.length - 1;
        while(left < right) {
            let current = nums[num] + nums[left] + nums[right];
            if(Math.abs(target - current) < Math.abs(target - closet)) {
                closet = current;
            }
            if(current < target) {
                left ++
            }else if (current > target) {
                right --
            }else {
                return current;
            }
        }
    }
    return closet;
};
