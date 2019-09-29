const {
    solution
} = require("./index")
const {
    expect
} = require("chai")


describe("타겟넘버", () => {
    it("test1", () => {
        const bishops = ["D5"]
        const result = solution(bishops)
        expect(result).to.eql(50)
    });
    it("test1", () => {
        const bishops = ["D5", "E8", "G2"]
        const result = solution(bishops)
        expect(result).to.eql(42)
    });
});