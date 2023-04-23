// 정수 찾기
function solution(num_list, n) {
  var answer = 0;

  if (num_list.includes(n)) {
    answer++;
  } else {
    answer = 0;
  }

  return answer;
}
