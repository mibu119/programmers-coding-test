function solution(num, k) {
    var answer = 0;
    let nums = num.toString().split('').map(e => Number(e))
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== k){
            answer = -1
        } else {
            answer = i + 1
            break
        }
    }
    
    return answer;
}