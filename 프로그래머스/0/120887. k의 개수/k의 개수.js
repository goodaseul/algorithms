function solution(i, j, k) {
    return Array(j-i+1).fill(i).map((value,index) => value + index).join("").split(k).length - 1
}