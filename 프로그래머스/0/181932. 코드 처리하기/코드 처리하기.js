function solution(code) {
    let mode = false;
    let ret = "";
    for( let i = 0; i < code.length; i ++){
       if(code[i] === "1") {
           mode = !mode;
           continue
       } 
        
       if(i % 2 ===0 && !mode) {
           ret += code[i]
       } else if(i % 2 !== 0 && mode ) {
           ret += code[i]
       }
    }
    return ret === "" ? "EMPTY" : ret;
}
