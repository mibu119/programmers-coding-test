// function solution(s) {
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     if (char === '(') {
//       count++;
//     } else {
//       count--;
//     }
//     if (count < 0) {
//       return false;
//     }
//   }
//   return count === 0;
// }

function solution(s){
    const answer = [];

    [...s].forEach(string => 
        (string === ')' && answer[answer.length - 1] === '(') ? answer.pop() : answer.push(string)
    )    
    
    return answer.length === 0;
}