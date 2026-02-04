function solution(str_list) {
  const lIdx = str_list.indexOf("l");
  const rIdx = str_list.indexOf("r");

  if (lIdx === -1 && rIdx === -1) return [];

  // l만 없는 경우 → r 기준 오른쪽
  if (lIdx === -1) {
    return str_list.slice(rIdx + 1);
  }

  // r만 없는 경우 → l 기준 왼쪽
  if (rIdx === -1) {
    return str_list.slice(0, lIdx);
  }

  // 둘 다 있으면 먼저 나온 쪽 기준
  if (lIdx < rIdx) {
    // l이 먼저
    return str_list.slice(0, lIdx);
  } else {
    // r이 먼저
    return str_list.slice(rIdx + 1);
  }
}
