function solution(arr) {
    let prev = arr
    let count = 0;
    while(true){
        let change = prev.map((e) => 
        e >= 50 && e % 2 === 0 ? e / 2 : 
        e < 50 && e % 2 !== 0 ? (e*2)+ 1 : 
        e )
        const isAllSame = prev.every((e, i) => e === change[i])
        if(isAllSame) break
        count+=1
        prev = change
    }
    
    return count
}