const andSibling = require('../andSibling.js');

describe('andSibling', () => {
    it("returns an empty string when passed an empty string", () => {
        const inputStr = "";
        const expected = "";
        expect(andSibling(inputStr)).toEqual(expected);
    });
    it("returns the input string when the string.length < 2", () => {
        const inputStr = "5";
        const expected = "5";
        expect(andSibling(inputStr)).toEqual(expected);
    });
    it("returns the input string when the string.length === 2", () => {
        const inputStr = "45";
        const expected = "45,54";
        expect(andSibling(inputStr)).toEqual(expected);
    });
    it("returns the AND-siblings when the string.length === 3", () => {
        const inputStr = "236";
        const expected = "236,263,326,362,623,632";
        expect(andSibling(inputStr)).toEqual(expected);
        expect(typeof andSibling(inputStr)).toBe("string");
    });
    it("returns the AND-siblings when the string.length > 3", () => {
        const inputStr = "2345";
        const expected = "2345,2354,2435,2453,2534,2543,3245,3254,3425,3452,3524,3542,4235,4253,4325,4352,4523,4532,5234,5243,5324,5342,5423,5432";
        expect(andSibling(inputStr)).toEqual(expected);
    });
    it('returns the AND-siblings for the extracted integers if the the provided string had non-integers characters and whitespaces', () => {
        const inputStr = "A 3B2 C6D";
        const expected = "326,362,236,263,632,623";
        expect(andSibling(inputStr)).toEqual(expected);
    });
    it("returns an error if passed an input that doesn\'t contain a numeric character", () => {
        const inputStr = "ABC";
        const expected = "Invalid Input: Please enter a string that contains a numeric character!";
        expect(andSibling(inputStr)).toBe(expected);
    });
})