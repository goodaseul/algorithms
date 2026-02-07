function solution(order) {
    return String(order).split("").filter((n) => n ==="3" || n ==="6" || n==="9").length;
}