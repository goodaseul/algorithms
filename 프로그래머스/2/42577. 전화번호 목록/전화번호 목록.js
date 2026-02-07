function solution(phone_book) {
    const phoneSort = [...phone_book].sort();
    
    for( let i = 0; i < phoneSort.length - 1; i++ ){
        if( phoneSort[i + 1].startsWith(phoneSort[i]) ){
            return false
        }
    }
    return true
}
