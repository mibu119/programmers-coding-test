function solution(n) {
    var answer = 0;
    const compositeNumbers = [];

  for (let num = 1; num <= n; num++) {
    let isComposite = false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isComposite = true;
        break;
      }
    }
    if (isComposite) {
        answer++
    }
  }
    
    return answer;
}