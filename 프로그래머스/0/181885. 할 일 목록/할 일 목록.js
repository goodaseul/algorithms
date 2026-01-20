function solution(todo_list, finished) {
    var answer = [];
    answer = todo_list.filter((todo,index) => !finished[index] && todo_list[index] )
    return answer;
}