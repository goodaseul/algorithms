function solution(arr, k) {
    var answer = arr.map((arr_num) => k % 2 === 0 ? arr_num + k : arr_num * k)
    return answer;
}