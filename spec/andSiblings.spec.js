const andSibling = require('../andSibling.js');

describe('andSibling', () => {
    it("returns an empty string when passed an empty string", () => {
        const inputStr = "";
        const expected = "";
        expect(andSibling(inputStr)).toBe(expected);
    });
})