function solution(num_list) {
   let result = num_list.length >= 11 ? 0 : 1;
    
    num_list.map((num,index) => {
        if( num_list.length >= 11 ){
            result += num
        }else if (num_list.length <= 10 ){
            result *= num
        }
    })
    
   return result;
}