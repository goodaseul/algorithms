function solution(nums) {
    const getHalf = nums.length / 2;
    const set = new Set(nums);
    return Math.min(getHalf, set.size)
}

