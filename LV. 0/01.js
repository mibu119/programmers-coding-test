// 두 수의 연산값 비교하기
function solution(a, b) {
  var answer = 0;

  let str1 = `${a}`;
  let str2 = `${b}`;
  let add = str1 + str2;
  let set1 = Number(add);
  let set2 = 2 * a * b;

  if (set1 > set2) {
    answer = set1;
  } else if (set1 < set2) {
    answer = set2;
  } else if (set1 === set2) {
    answer = set1;
  }

  return answer;
}
