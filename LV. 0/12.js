// 배열 자르기
function solution(numbers, num1, num2) {
  var answer = [];

  answer = numbers.slice(num1, num2 + 1);

  return answer;
}
