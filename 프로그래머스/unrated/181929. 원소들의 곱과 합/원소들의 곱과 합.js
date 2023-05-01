function solution(num_list) {
    var answer = 0;
    let sum = 0;
    let double = 1;
    
    for(let i = 0; i < num_list.length; i++){
        sum += num_list[i]
        double *= num_list[i]
    }
    
    console.log(sum*sum, double)
    
    if(sum*sum > double) {
        answer = 1
    } else {
        answer = 0
    }
    
    return answer;
}