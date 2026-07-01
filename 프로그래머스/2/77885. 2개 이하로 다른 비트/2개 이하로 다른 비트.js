function solution(numbers) {
    const answer = numbers.map((number) => {
        if( number % 2 === 0) return number + 1;
        
        let binary = "0" + number.toString(2)
        let targetIndex = binary.lastIndexOf("01");
        let prefix = binary.slice(0, targetIndex);
        let suffix = binary.slice(targetIndex + 2);
        
        let newBinary = prefix + 10 + suffix;
    
        return parseInt(newBinary, 2)
    });
    
    return answer;
}
// 짝수는 맨끝자리가 0 => 1
// 홀수일때는 맨 끝자리가 1이라서 비트가 2개만 바뀐걸
// 가장 오른쪽에 있는 01 이 10 으로 바꿀때 같은거를 찾기
// 2 = 0 10
// 3 = 0 11
// 4 = 0 100
// 5 = 0 101
// 6 = 0 110
// 7 = 0 111
// 8 = 0 1000
// 9 = 0 1001
// 10 = 0 1010
// 11 = 0 1011
// 12 = 0 1100
// 13 = 0 1101
// 14 = 0 1110
// 15 = 0 1111
// 16 = 0 10000