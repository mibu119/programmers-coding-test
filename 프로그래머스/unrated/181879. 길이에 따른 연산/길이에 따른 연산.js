function solution(num_list) {
    var answer = 1;
    let sum = 0
    
    for(let i = 0; i < num_list.length; i++){
        if(num_list.length >= 11){
            sum += num_list[i]
        } else if(num_list.length <= 10){
            answer *= num_list[i]
        }
    }
    
    console.log(sum, answer)
    
    return (answer !== 1 && answer) || (sum !== 0 && sum)
}