function solution(a, d, included) {
    
    let arr = new Array(included.length).fill(a).map((e, i) => e + d*i)
    
    return arr.filter((e, i) => included[i] && e).reduce((a, b) => a+b);
}