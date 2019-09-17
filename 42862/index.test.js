const {
    solution
} = require("./index")
const {
    expect
} = require("chai")


describe("체육복", () => {
    it("test1", () => {
        const n = 5
        const lost = [2, 4]
        const reserve = [1, 3, 5]
        const result = solution(n, lost, reserve)
        expect(result).to.eql(5)
    });
    it("test2", () => {
        const n = 5
        const lost = [2, 4]
        const reserve = [3]
        const result = solution(n, lost, reserve)
        expect(result).to.eql(4)
    });
    it("test3", () => {
        const n = 3
        const lost = [3]
        const reserve = [1]
        const result = solution(n, lost, reserve)
        expect(result).to.eql(2)
    });

});