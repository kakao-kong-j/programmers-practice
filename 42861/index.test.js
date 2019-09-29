const {
    solution
} = require("./index")
const {
    expect
} = require("chai")


describe("조이스틱", () => {
    it("test1", () => {
        const sticker = [12, 12, 12, 12, 12]
        const result = solution(sticker)
        expect(result).to.eql(36)
    });
    it("test1", () => {
        const sticker = [12, 80, 14, 22, 100]
        const result = solution(sticker)
        expect(result).to.eql(180)
    });

});