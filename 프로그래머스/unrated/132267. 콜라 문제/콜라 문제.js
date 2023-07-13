function solution(a, b, n) {
    var answer = 0;
    while(n >= a){
        let received = Math.floor(n / a)
        answer += (received*b)
        n = (received*b) + (n % a)
    }
    return answer;
}