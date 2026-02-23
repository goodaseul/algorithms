function solution(arr){
    const result = arr.filter((_num,idx) => arr[idx] !== arr[idx + 1]);
    return result;
}
