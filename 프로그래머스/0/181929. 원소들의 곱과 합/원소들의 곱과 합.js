function solution(num_list) {
  const sum = num_list.reduce((acc, cur) => acc + cur, 0);
  const multi = num_list.reduce((acc, curr) => acc * curr, 1);

  const answer = multi > sum * sum ? 0 : 1;
  return answer;
}