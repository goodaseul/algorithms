function solution(arr){
    const answer = arr.filter((num,idx) => arr[idx] !== arr[idx + 1] )
    return answer 
}