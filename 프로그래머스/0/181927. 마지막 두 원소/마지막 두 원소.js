function solution(num_list) {
    let [a, b] = [num_list[num_list.length - 2 ], num_list[num_list.length - 1]];
    return  b > a ? [...num_list, b-a] : [...num_list, b * 2]
}