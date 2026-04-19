function solution(quiz) {
    return quiz.map((item) => {
        const [X, sign, Y, _, result] = item.split(" ");
        let numX = Number(X);
        let numY = Number(Y);
        let answer = Number(result);
        
        let calc = sign === "+" ? numX + numY : numX - numY;
        return calc === answer ? "O" : "X"        
    })
}