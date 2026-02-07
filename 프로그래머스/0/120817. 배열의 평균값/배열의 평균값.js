function solution(numbers) {
    // let sum = 0;
    // numbers.forEach(number => {
    //     sum += +number
    // })
    // return sum / numbers.length
    
    return numbers.reduce((acc,cur) => acc + cur , 0) / numbers.length
}