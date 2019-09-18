const {
    solution
} = require("./index")
const {
    expect
} = require("chai")


describe("타겟넘버", () => {
    it("test1", () => {
        const numbers = [1, 1, 1, 1, 1]
        const target = 3
        const result = solution(numbers, target)
        expect(result).to.eql(5)
    });
});