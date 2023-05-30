function solution(s) {
    let arr = s.split(' ').map(e => e !== 'Z' ? Number(e) : e)
    let answer = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] === 'Z'){
            answer -= arr[i-1]
            continue
        }
        answer += arr[i]
    }
    
    return answer;
}