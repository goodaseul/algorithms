function solution(ingredient) {
    let count = 0;
    let menu = [];
    for( let i of ingredient){
        menu.push(i)
        if( menu.length < 4) continue;
        if( menu[menu.length - 4] === 1
            && menu[menu.length - 3] === 2
            && menu[menu.length - 2] === 3 
            && menu[menu.length - 1] === 1 
         ){
            count++;
            menu.pop();
            menu.pop();
            menu.pop();
            menu.pop();
        }
    }
    
    return count;
}
