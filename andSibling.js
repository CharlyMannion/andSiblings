const andSibling = (input) => {
    const filteredStr = input.replace(/\D/g, '');
    const results = [];
    if (input.length < 1) {
        return input;
    }
    if (filteredStr.length < 1) {
        return "Invalid Input: Please enter a string that contains a numeric character!";
    }
    if (filteredStr.length < 2) {
        return filteredStr;
    }
    if (filteredStr.length === 2) {
        return [filteredStr, filteredStr[1] + filteredStr[0]].join();
    }
    filteredStr.split('').forEach((char, index, arr) => {
        var subStr = [].concat(arr);
        subStr.splice(index, 1);
        andSibling(subStr.join('')).split(',').forEach((elem) => {
            results.push(char + elem);
        });
    });
    const unique = [...new Set(results)];
    return unique.join();
};

module.exports = andSibling;