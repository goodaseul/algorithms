/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const alphabetSet = new Set(sentence);

    return alphabetSet.size === 26 ? true : false
};