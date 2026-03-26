var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let result = [];

    for (let num = 0; num < nums.length - 2; num++) {

        if (num > 0 && nums[num] === nums[num - 1]) continue;

        let left = num + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[num] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[num], nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }

    return result;
};