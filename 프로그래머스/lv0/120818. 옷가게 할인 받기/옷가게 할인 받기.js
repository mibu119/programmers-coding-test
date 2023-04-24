function solution(price) {
    var answer = 0;
    console.log(price)
    if(price >= 100000 && price < 300000){
        answer = price * 0.95
    } else if (price >= 300000 && price < 500000){
        answer = price * 0.9
    } else if (price >= 500000){
        answer = price * 0.8
    } else if (price < 100000){
        return answer = price
    }
    
    return Math.floor(answer);
}