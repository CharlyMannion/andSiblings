function andSibling(input) {
    const results = [];
    if (input.length === 2) {
        return [input, input[1] + input[0]].join();
    }
    // move to top 
    if (input.length < 2) {
        return input;
    } else if (!input || typeof input !== "string") {
        return "Invalid Input: Please enter a string!";
    } else {
        input.split('').forEach(function(char, index, arr) {
            var subStr = [].concat(arr);
            subStr.splice(index, 1);
            andSibling(subStr.join('')).split(',').forEach(function(elem) {
                results.push(char + elem);
            });
        });
        // filter unique values in array before returning it
        return results.join();
    }
};

module.exports = andSibling;