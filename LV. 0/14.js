// 중복된 숫자 개수
function solution(array, n) {
  var answer = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      answer++;
    }
  }

  return answer;
}
