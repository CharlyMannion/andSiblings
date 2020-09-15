function andSibling(input) {
    const results = [];

    if (input.length < 2) {
        return input;
    } else if (!input || typeof input !== "string") {
        return "Invalid Input: Please enter a string!";
    } else if (input.length == 2) {
        const resTwo = [input, input[1] + input[0]];
        return resTwo;
        // return resTwo.join();
    }

    input.split('').forEach(function(char, index, arr) {
        var subStr = [].concat(arr);
        subStr.splice(index, 1);
        andSibling(subStr.join('')).forEach(function(elem) {
            results.push(char + elem);
        });
    });

    return results.join();
};

module.exports = andSibling;