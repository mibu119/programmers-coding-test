function solution(n, slicer, num_list) {
    var answer = [];
    let a = slicer[0]
    let b = slicer[1] + 1
    let c = slicer[2]
    // let [a, b, c] = [...slicer]
    if(n === 1){
        answer = num_list.slice(0, b)
    }else if(n === 2){
        answer = num_list.slice(a, num_list.length)
    }else if(n === 3){
        answer = num_list.slice(a, b)
    }else if(n === 4){
        answer = num_list.slice(a, b).filter((_, i) => i % c === 0)
    }
    
    return answer;
}