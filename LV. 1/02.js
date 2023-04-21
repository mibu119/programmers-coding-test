// 부족한 금액 계산하기
function solution(price, money, count) {
  let answer = 0;
  let use = 0;

  for (i = 1; i <= count; i++) {
    use += price * i;
  }

  if (money <= use) {
    answer = use - money;
  } else {
    answer = 0;
  }

  return answer;
}
