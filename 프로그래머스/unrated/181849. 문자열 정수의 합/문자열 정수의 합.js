function solution(num_str) {
    var answer = 0;
    
    let arr = num_str.split('')
    
    for(i = 0; i < arr.length; i++){
        answer += Number(arr[i])
    }    
    
    return answer;
}