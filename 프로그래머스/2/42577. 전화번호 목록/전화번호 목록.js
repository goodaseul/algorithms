function solution(phone_book) {
    const set = new Set(phone_book);
    for( let word of phone_book ) {
        let prefix = "";
        for( let char of word ){
            prefix += char;
            if( set.has(prefix) && prefix !== word){
                return false
            }
        }
    }
    return true;
}