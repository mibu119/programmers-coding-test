function solution(cipher, code) {
    var answer = '';
    let arr = cipher.split('')
    let empty = [];
    
    for(let i = code; i <= arr.length; i+=code){
        empty.push(arr[i - 1])
    }
    
    answer = empty.join('')
    return answer;
}