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

        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                count += j === i / j ? 1 : 2; // 중복 제외
            }
        }

        sum += count > limit ? power : count;
    }

    return sum;
}

