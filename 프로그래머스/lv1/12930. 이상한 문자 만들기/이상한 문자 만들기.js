function solution(s) {
    // 공백을 기준으로 쪼개서 배열에 저장(단어를 기준으로)
    const answer = s.split(' ').map( word => {
                                            return word.split('').map((letter, i) => {
                                                // console.log(letter, i)
                                                return i % 2 === 0
                                                          ? letter.toUpperCase()
                                                          : letter.toLowerCase()
                                            }).join('')
                                        }).join(' ')
//     let idx = 0; // 단어별로 인덱스 값을 저장
    
// for(let i = 0; i < s.length; i++){
//     // console.log(s[i], idx)
//     if(s[i] === ' '){
//         // 공백이라면 그냥 공백을 넣어준다. (예외처리)
//         idx = 0;
//     } else {
//         answer += idx % 2 === 0
//         ? s[i].toUpperCase() // 짝수 인덱스라면 대문자
//         : s[i].toLowerCase() // 홀수 인덱스라면 소문자
//         idx++;
//     }
// }
//     console.log(answer)
    return answer;
}