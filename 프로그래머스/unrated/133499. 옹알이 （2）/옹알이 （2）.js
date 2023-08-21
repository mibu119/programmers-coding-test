function solution(babbling) {
  let answer = 0;

  // forEach() 메서드로 babbling을 하나씩 확인합니다.
  for (let word of babbling) {
    if (/(aya|ye|woo|ma)\1+/g.test(word)) continue;
    if (/^(aya|ye|woo|ma)+$/g.test(word)) {
      answer++;
    }
  }

  return answer;
}