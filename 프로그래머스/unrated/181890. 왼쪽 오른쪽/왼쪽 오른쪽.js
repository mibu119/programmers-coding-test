function solution(str_list) {
    
    let lIdx = str_list.indexOf('l')
    let rIdx = str_list.indexOf('r')
    let subL = str_list.slice(0, lIdx)
    let subR = str_list.slice(rIdx+1)
    if(!str_list.includes('l') && !str_list.includes('r')){
        return []
    } else if(!str_list.includes('l') && str_list.includes('r')){
        return subR
    } else if(str_list.includes('l') && !str_list.includes('r')){
        return subL
    } else {
        return lIdx < rIdx ? subL : subR
    }
}