function solution(strArr) {    
    let lengths = strArr.map(e => e.length)
    let lengthObj = {}
    for(let length of lengths){
        let key = length
        if(!lengthObj[key]){
            lengthObj[key] = 0
        }
        lengthObj[key] += 1
    }
    
    let maxCount = 0;
    let maxValue = null
    
     for (let key in lengthObj) {
     if (lengthObj.hasOwnProperty(key)) {
      if (lengthObj[key] > maxCount) {
        maxCount = lengthObj[key];
        maxValue = key;
      }
    }
  }
    
    return maxCount;
}