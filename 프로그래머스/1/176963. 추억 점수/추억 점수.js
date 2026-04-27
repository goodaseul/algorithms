function solution(name, yearning, photo) {
    const map = new Map();
    for(const [index, person] of name.entries()) {
        map.set(person, yearning[index]);
    }
    let result = [];
    
    photo.forEach((pic) => {
        const total = pic.reduce((acc,cur) => {
            return acc + (map.get(cur) || 0)
        }, 0);
        
        result.push(total)
    })
    return result;
}