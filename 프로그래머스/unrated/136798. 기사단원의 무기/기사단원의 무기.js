// function countDivisors(num) {
//     let count = 0;
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             count++;
//         }
//     }
//     return count;
// }


// function solution(number, limit, power) {
//     let array = Array.from({ length: number }, (_, i) => i + 1);
//     let divisors = [];
//     let sum = 0;
    
//     for(let i = 0; i < array.length; i++){
//         divisors.push(countDivisors(array[i]))
//     }
    
//     divisors.map(d => {
//         if(d > limit) {
//             sum += power
//         } else {
//             sum += d
//         }
//     })
    
//     return sum
// }

function solution(number, limit, power) {
    let sum = 0;

    for (let i = 1; i <= number; i++) {
        let count = 0;
        let sqrtI = Math.floor(Math.sqrt(i)); // 숫자 i의 제곱근의 정수 부분

        for (let j = 1; j <= sqrtI; j++) {
            if (i % j === 0) {
                count += 2; // j와 i/j 둘 다 약수인 경우
            }
        }

        if (sqrtI * sqrtI === i) {
            count--; // 제곱근이 정수인 경우 중복 계산을 방지하기 위해 제외
        }

        if (count > limit) {
            sum += power;
        } else {
            sum += count;
        }
    }

    return sum;
}
