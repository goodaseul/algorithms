function solution(polynomial) {
    const words = polynomial.split(" + ");
    
    let xSum = 0;
    let numSum = 0;
    
    words.forEach((word) => {
        if( word.includes('x')) {
            const num = word.replace("x" , "");
            xSum += num === "" ? 1 : Number(num)
        }else { 
            numSum += Number(word)
        }
    })
    if(xSum === 0) return `${numSum}`;
    if (numSum === 0) return xSum === 1 ? "x" : `${xSum}x`;
    const xPart = xSum === 1 ? "x" : `${xSum}x`;
    return `${xPart} + ${numSum}`
}