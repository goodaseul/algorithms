function solution(arr, k) {
    const newArr = [...new Set(arr)];

    if( newArr.length > k) {
        return newArr.slice(0, k)
    }
    
    return [...newArr, ...Array(k - newArr.length).fill(-1)]
}