function solution(myString, pat) {
    return [...myString].filter( (_,i) => {
        return myString.slice(i, i + pat.length) === pat  
    }).length
}