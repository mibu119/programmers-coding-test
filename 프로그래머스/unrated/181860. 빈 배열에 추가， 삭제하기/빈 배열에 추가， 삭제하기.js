function solution(arr, flag) {
    let answer = [];

    for(let i = 0; i < arr.length; i++){
        if(flag[i]){
            let count = arr[i]*2
            while(count > 0){
                answer.push(arr[i])
                count--;
            }
        } else {
            answer = answer.slice(0, answer.length - arr[i])
        }
    }
            
    return answer;
}


    // flag.forEach((b, i) => {
    //     arr.forEach((e, i2)=> {
    //         if(i === i2 && b){
    //             answer = answer.fill(e, i, e*2)
    //         } else if(i === i2 && !b){
    //             answer = answer.slice(0, answer.length - 1 - e)
    //         }
    //     })
    // })