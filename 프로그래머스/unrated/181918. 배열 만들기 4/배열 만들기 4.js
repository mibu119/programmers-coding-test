// function solution(arr) {
//     var stk = [];
//     stk.push(arr[0])
//    for(let i = 1; i < arr.length; i++){
//        if(stk !== null){
//             if(stk[stk.length - 1] < arr[i]){
//                 stk.push(arr[i])
//             } else {
//                 stk.pop()
//                 i = i - 1
//             }
//         }
//     }
//     return stk;
// }
function solution(arr) {
  var stk = [];
  stk.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (stk.length !== 0) {
      if (stk[stk.length - 1] < arr[i]) {
        stk.push(arr[i]);
      } else {
        stk.pop();
        i--;
      }
    } else {
      stk.push(arr[i]);
    }
  }

  return stk;
}
