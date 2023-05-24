function solution(my_string, m, c) {  
    let arr = my_string.split('')
    let answer = ''
    for(let i = c-1; i < my_string.length; i+=m){
        answer += arr[i]
    }
    
    return answer;
}