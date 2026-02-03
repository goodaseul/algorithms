function solution(str1, str2) {
    let letter = ""; 
    str1.split("").map((_,idx) => {
        letter += str1[idx] 
        letter += str2[idx]
    })
    return letter
}