function solution(nums) {
    let getNums = nums.length / 2;
    const map = new Map();
    for( const num of nums) {
        map.set( num, (map.get(num) || 0) + 1);
    }
    return Math.min(getNums, map.size)
}