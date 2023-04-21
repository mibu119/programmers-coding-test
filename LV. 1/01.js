// 약수의 개수와 덧셈
// 풀이 못 끝냄
function divisor(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer;
}

function solution(left, right) {
  let answer = 0;
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
    if (divisor(arr[i]).length % 2 === 0) {
      answer = answer + arr[i];
    } else {
      answer = answer - arr[i];
    }
  }
  return answer;
}
