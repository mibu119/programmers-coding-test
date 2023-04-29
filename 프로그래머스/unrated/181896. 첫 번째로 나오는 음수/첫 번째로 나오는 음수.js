function solution(num_list) {
    var answer = 0;
    if(num_list.every(e => e > 0)){
        return answer = -1
    } else {
        return answer = num_list.findIndex(e => e < 0)
    }
}