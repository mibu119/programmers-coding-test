function solution(sizes) {
    let answer = 0;
    let max = [];
    let min = [];
     for (const [a, b] of sizes){
         // 지갑 길이 중 가장 큰 길이끼리 합치기
       max.push(Math.max(...[a, b]))
         // 지갑 길이 중 가장 작은 길이끼리 합치기
         min.push(Math.min(...[a, b]))
    }
    
    // 큰 값 배열 중의 최대값과 작은 값 배열 중의 최소값을 곱하기
    answer = Math.max(...max) * Math.max(...min)
    
    return answer;
}