function solution(number) {
    let answer = 0;
    const getCombinations = function (arr, selectNumber) {
        const results = [];
        // 종료조건: 반복할 게 없기 때문에 반환
        if (selectNumber === 1) return arr.map((el) => [el]);
        
        // fixed는 arr의 원소, index는 원소의 인덱스, origin은 arr 자체
        arr.forEach((fixed, index, origin) => {
            const rest = origin.slice(index + 1);
            // 종료조건까지 가기 위하여 selectNumber - 1
            const combinations = getCombinations(rest, selectNumber - 1);
            const attached = combinations.map((el) => [fixed, ...el]);
            results.push(...attached);
        });

        return results;
    }

    answer = getCombinations(number, 3)
    return  answer.filter(([a, b, c]) => a+b+c === 0).length;
}