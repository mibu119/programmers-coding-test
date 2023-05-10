function solution(str_list, ex) {
    var answer = '';
    
    answer = str_list.filter(e => !e.includes(ex)).join('')
    
    return answer;
}