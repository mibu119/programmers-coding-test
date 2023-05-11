function solution(my_strings, parts) {
    var answer = '';
    let partOne = parts[0]
    let partTwo = parts[1]
    // console.log(my_strings[0].slice(parts[0][0], parts[0][1] + 1))
    
    for(let i = 0; i < my_strings.length; i++){
            for(let h = 1; h < 2; h++){
            answer += my_strings[i].slice(parts[i][h - 1], parts[i][h] + 1)
        }
        
    }
    
    return answer;
}