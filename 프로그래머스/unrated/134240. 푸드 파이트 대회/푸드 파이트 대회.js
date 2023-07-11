function solution(food) {
    
    // 대회를 위한 음식 배치, 두 선수 모두 같은 양을 먹어야함.
    // 인덱스 0 = 물, 항상 1이다. 중앙의 물을 배치
    // 음식들은 1인 경우 나누어 먹을 수 없다. 포함시키지 x
    // 인덱스 1 = 1번 음식, 하지만 둘이서 먹으므로 나누어서 먹음
    // 인덱스 2 = 2번 음식, ..
    // 인덱스 3 = 3번 음식, ..
    
    // 0번 제외한 배열만 남기고 1~3번 음식 순서대로 나열한 문자열 + '0' + reverse한 문자열
    
    let normalStr = '';
    food.shift();
    let normal = food
    let current = 0;
    
    for(let i = 1; i <= normal.length; i++){
        if(normal[i-1] > 1) {
            
            let count = Math.floor(normal[i-1] / 2)
            // 1번 음식을 먹는 만큼 반복, 2번 음식을 먹는 만큼...
            current += count
            while(normalStr.length < current){
                normalStr += i.toString()
            }
        }
    }
    
    let reverseStr = normalStr.split('').reverse().join('')
    
    return normalStr + '0' + reverseStr;
}