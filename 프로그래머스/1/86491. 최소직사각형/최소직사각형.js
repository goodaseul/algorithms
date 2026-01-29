function solution(sizes) {
    var answer = 0;
    let width = [];
    let height = [];
    
    for (let i = 0; i <sizes.length; i++){
        const w = sizes[i][0];
        const h = sizes[i][1];
        width.push(Math.max(w,h));
        height.push(Math.min(w,h));
    }

    answer = Math.max(...width) * Math.max(...height)
    return answer;
}