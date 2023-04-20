// 약수의 개수와 덧셈
// 풀이 못 끝냄
function solution(left, right) {
  var answer = 0;
  let arr = [];
  arr.push(left);

  while (left < right) {
    left++;
    arr.push(left);
    if (left > right) {
      break;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j <= right; j++) {
      if (arr[i] % j === 0) {
        answer++;
      }
    }
  }

  return answer;
}
