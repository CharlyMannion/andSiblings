const andSibling = (input) => {
    const resultSiblings = [];
    const filteredStr = input.replace(/\D/g, '');
    const errorMsg = "Invalid Input: Please enter a string that contains a numeric character!"
    const arrForTwoChars = [filteredStr, filteredStr[1] + filteredStr[0]].sort().reverse().join();


    if (input.length < 1) return input;
    if (filteredStr.length < 1) return errorMsg;
    if (filteredStr.length < 2) return filteredStr;
    if (filteredStr.length === 2) return arrForTwoChars;

    filteredStr.split('').forEach((char, index, arr) => {
        var subStr = [].concat(arr);
        subStr.splice(index, 1);
        andSibling(subStr.join('')).split(',').forEach((elem) => {
            resultSiblings.push(char + elem);
        });
    });
    const uniqueSiblings = [...new Set(resultSiblings)].sort().reverse().join();
    return uniqueSiblings;
};

module.exports = andSibling;