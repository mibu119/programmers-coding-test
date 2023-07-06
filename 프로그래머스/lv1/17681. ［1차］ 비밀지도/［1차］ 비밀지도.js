// function solution(n, arr1, arr2) {
//     let answer = [];
    
//     function zerofill_1(value, fillCount){
//         let result = value;
//         if(typeof value === "number") result = value.toString()
//         return result.padStart(fillCount, '0')
//     }
    
//     function change(arr){
//         return  arr.map((el) => el.toString(2)).map((e) => 
//             e.length !== n ? zerofill_1(e, n) : e
//         )
//     }
    
//     let change01 = change(arr1)
//     let change02 = change(arr2)
    
//     for(let i = 0; i < change01.length; i++){
//        let e = Number(change01[i]) + Number(change02[i])
//        answer.push(zerofill_1(e, n))
//     }
    
//     answer = answer.map(e => e.toString()).map(e => {
//         let str = ``
//         for(const num of e){
//           if(num !== `0`){
//               str += `#`
//           }  else {
//               str += ` `
//           }
//         }
//         return str
//     })
    
    
//     return answer;
// }

function solution(n, arr1, arr2) {
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;
}