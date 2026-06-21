function solution(arr)
{
    const stack = [];
    
    for(let i = 0; i < arr.length; i++){
        if(stack.legnth === 0 || stack[stack.length - 1] !== arr[i]){
            stack.push(arr[i])
        }
    }
    
    return stack
}