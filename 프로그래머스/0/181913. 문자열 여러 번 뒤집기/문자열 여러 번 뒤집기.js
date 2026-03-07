function solution(my_string, queries) {
    let i = 0;
    let answer = my_string;
    while( i < queries.length ) {
        const [start, end] = queries[i];
        const reversed = answer.slice(start, end+1).split("").reverse().join("");
        answer = answer.slice(0, start) + reversed + answer.slice(end + 1);
        i++;
    }
    return answer;
}
