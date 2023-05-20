function solution(arr) {
    var answer = 0;
    let count = 0
    
    // 시간 복잡도를 낮추는 방향으로 코드를 개선하려면 어떻게?
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i][j] === arr[j][i]){
                count += 1
            } else {
                count -= 1
            }
        }
    }
    

    
    return answer = arr.length * arr[0].length !== count ? 0 : 1;
}