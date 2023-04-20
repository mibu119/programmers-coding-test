// 커피 심부름
function solution(order) {
  var answer = 0;
  for (i = 0; i < order.length; i++) {
    if (order[i].includes("americano")) {
      answer += 4500;
    } else if (order[i].includes("cafelatte")) {
      answer += 5000;
    } else if (order[i] === "anything") {
      answer += 4500;
    }
  }
  return answer;
}
