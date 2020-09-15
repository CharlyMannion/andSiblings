const andSibling = require('../andSibling.js');

describe('andSibling', () => {
    it("returns an empty string when passed an empty string", () => {
        const inputStr = "";
        const expected = "";
        expect(andSibling(inputStr)).toEqual(expected);
    });
    it("returns an error if passed an input that isn\'t a string", () => {
        const inputStr = ["not", "a", "string", 2];
        const expected = "Invalid Input: Please enter a string!";
        expect(andSibling(inputStr)).toBe(expected);
    });
    it("returns the input string when the string.length < 2", () => {
        const inputStr = "a";
        const expected = "a";
        expect(andSibling(inputStr)).toEqual(expected);
    });
    it("returns the input string when the string.length === 2", () => {
        const inputStr = "ab";
        const expected = "ab,ba";
        expect(andSibling(inputStr)).toEqual(expected);
    });
    it("retuns the AND-siblings when the string.length >= 2", () => {
        const inputStr = "236";
        const expected = "236,263,326,362,623,632";
        expect(andSibling(inputStr)).toEqual(expected);
        expect(typeof andSibling(inputStr)).toBe("string");
    })
})