function solution(todo_list, finished) {
    var answer = [];
    
    // finished가 true이면, todo_list의 요소는 answer로 푸쉬되지 않음.
    finished.forEach((e, i) => !e && answer.push(todo_list[i]))
    
    // finished가 false이면, todo_list의 요소는 answer로 푸쉬
    
    return answer;
}