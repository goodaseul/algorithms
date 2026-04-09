/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const letters = {
        "2" : "abc",
        "3" : "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    }
    let newArr = [""];
    for(let digit of digits) {
        let currents = letters[digit] // "abc"
        let temp = [];
        for(let prev of newArr) {
            for(let current of currents){
                temp.push(prev + current)
            }
        }
        newArr = temp;
    }
    return newArr
};
