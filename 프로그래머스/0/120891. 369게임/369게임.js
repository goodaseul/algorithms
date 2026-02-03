function solution(order) {
    let num = String(order).split("");
    return num.filter((n) => n ==="3" || n ==="6" || n==="9").length;
}