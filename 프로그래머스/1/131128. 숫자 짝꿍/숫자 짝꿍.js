function solution(X, Y) {
  let result = [];
    const countX = Array(10).fill(0);
    const countY = Array(10).fill(0);
    
    for( let x of X) countX[x]++
    for( let y of Y) countY[y]++
    
    for( let i = 9; i >= 0; i--){
        const common = Math.min(countX[i], countY[i]);
        for( let j = 0; j < common; j++){
            result.push(i)
        }
    }
  if (result.length === 0) return "-1";
  if (result[0] === 0) return "0";
  return result.join("");
}
