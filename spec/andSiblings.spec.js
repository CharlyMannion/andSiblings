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
        const expected = "54,45";
        expect(andSibling(inputStr)).toEqual(expected);
    });
    it("returns the AND-siblings when the string.length === 3", () => {
        const inputStr = "236";
        const expected = "632,623,362,326,263,236";
        expect(andSibling(inputStr)).toEqual(expected);
        expect(typeof andSibling(inputStr)).toBe("string");
    });
    it("returns the AND-siblings when the string.length > 3", () => {
        const inputStr = "2345";
        const expected = "5432,5423,5342,5324,5243,5234,4532,4523,4352,4325,4253,4235,3542,3524,3452,3425,3254,3245,2543,2534,2453,2435,2354,2345";
        expect(andSibling(inputStr)).toEqual(expected);
    });
    it('returns the AND-siblings for the extracted integers if the the provided string had non-integers characters and whitespaces', () => {
        const inputStr = "A 3B2 C6D";
        const expected = "632,623,362,326,263,236";
        expect(andSibling(inputStr)).toEqual(expected);
    });
    it("returns an error if passed an input that doesn\'t contain a numeric character", () => {
        const inputStr = "ABC";
        const expected = "Invalid Input: Please enter a string that contains a numeric character!";
        expect(andSibling(inputStr)).toBe(expected);
    });
    it("works for a string that contains repeated numeric characters, only returning unique AND-siblings", () => {
        const inputStr = "223";
        const expected = "322,232,223";
        expect(andSibling(inputStr)).toBe(expected);
    });
})