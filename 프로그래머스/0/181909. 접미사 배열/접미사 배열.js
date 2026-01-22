function solution(my_string) {
    var answer = [];
    
    let check_string = my_string.length;
    while( check_string > 0 ){
        check_string -= 1;
        answer.push(my_string.slice(check_string));
    }
    return answer.sort();
}