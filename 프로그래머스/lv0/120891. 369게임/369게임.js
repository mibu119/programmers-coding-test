function solution(order) {
    var answer = 0;
    
    let nums = order.toString().split('').filter(e => Number(e))
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 3 === 0){
            answer++
        }
    }
    
    return answer;
}