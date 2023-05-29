function solution(board, k) {
    var answer = 0;
    
    board.map((e, i) => e.map((e, j) => {
        if(i + j <= k){
            answer += e
        }
    }))
    
    return answer;
}