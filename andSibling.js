function andSibling(input) {
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
    } else {
        filteredStr.split('').forEach(function(char, index, arr) {
            var subStr = [].concat(arr);
            subStr.splice(index, 1);
            andSibling(subStr.join('')).split(',').forEach(function(elem) {
                results.push(char + elem);
            });
        });
        // filter unique values in array before returning it
        var unique = results.filter((val, idx, self) => self.indexOf(val) === idx);
        return unique.join();
    };
};

module.exports = andSibling;