function andSibling(input) {
    if (input.length < 2) {
        return input;
    } else if (!input || typeof input !== "string") {
        return "Invalid Input: Please enter a string!";
    }
    const results = [];

    for (let i = 0; i < input.length; i++) {
        const firstChar = input[i];
        const otherChar = input.substring(0, i) + input.substring(i + 1);
        const otherPermutations = andSibling(otherChar);

        for (let j = 0; j < otherPermutations.length; j++) {
            results.push(firstChar + otherPermutations[j]);
        }
    }
    return results;
};

module.exports = andSibling;