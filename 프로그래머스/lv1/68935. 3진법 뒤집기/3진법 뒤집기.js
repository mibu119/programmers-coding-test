function solution(n) {
    var answer = 0;
    let arr = [];
    while(n > 0){
        let c = n % 3
        arr.push(c)
        n = Math.floor(n/3)
    }
    arr.reverse();
    for(let i = 0; i < arr.length; i++){
        answer += arr[i] * 3 ** i
    }
    
    return answer;
}