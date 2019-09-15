const {
    solution
} = require("./index")
const {
    expect
} = require("chai")


describe("모의고사", () => {
    it("test1", () => {
        const answer = [1, 2, 3, 4, 5]
        const result = solution(answer)
        expect(result).to.eql([1])
    });
    it("test2", () => {
        const answer = [1, 3, 2, 4, 2]
        const result = solution(answer)
        expect(result).to.eql([1, 2, 3])
    });

});