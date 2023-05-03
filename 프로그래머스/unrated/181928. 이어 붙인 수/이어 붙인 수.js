function solution(num_list) {
    var answer = 0;
    
    let odd = Number(num_list.filter(e => e % 2 !== 0).map(e => e.toString()).reduce((acc, cur) => acc + cur))
    let even = Number(num_list.filter(e => e % 2 === 0).map(e => e.toString()).reduce((acc, cur) => acc + cur))
    console.log(odd, even)

    answer = odd + even
    
    return answer;
}