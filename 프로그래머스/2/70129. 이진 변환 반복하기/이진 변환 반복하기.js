function solution(s) {
    let count = 0;
    let zero = 0;
    while(s !== "1") {
        const before = s.length;
        s = s.replace(/0/g, "");
        zero += before - s.length;
        s = s.length.toString(2); 
        count++;
    }
    return [count, zero]
}