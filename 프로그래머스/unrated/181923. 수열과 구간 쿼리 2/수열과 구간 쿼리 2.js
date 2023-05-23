function solution(arr, queries) {
    var answer = [];
    for(let [s, e, k] of queries){
        let temp = arr.filter((a, i) => s <= i && e >= i && k < a).sort((a,b) => a-b)[0]
        answer.push(temp ? temp : -1)
    }

    return answer;
}