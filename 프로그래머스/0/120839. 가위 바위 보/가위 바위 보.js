function solution(rsp) {
    let answer = {
        "0" : "5",
        "2" : "0",
        "5" : "2"
    }
    return [...rsp].map((value) => answer[value]).join("")
    
//     const newArr = rsp.split("");
//     const result = [];
//     newArr.map((rspNum) => {
//         rspNum === "2" && result.push("0");
//         rspNum === "0" && result.push("5");
//         rspNum === "5" && result.push("2");
//      })
//     return result.join().replaceAll(",","")
}