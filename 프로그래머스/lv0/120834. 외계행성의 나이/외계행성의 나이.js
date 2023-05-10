function solution(age) {
    var answer = [];
    
    let lower = "abcdefghijklmnopqrstuvwxyz"
    let arr = age.toString().split('').map(e => Number(e))
    for(let i = 0; i < arr.length; i++){
        answer.push(lower[arr[i]])
    }
    
    return answer.join('');
}