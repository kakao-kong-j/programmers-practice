const {
    solution
} = require("./index")
const {
    expect
} = require("chai")


describe("2 x n 타일링", () => {
    it("test1", () => {
        const n = 4
        const result = solution(n)
        console.log(solution(5))
        console.log(solution(6))
        console.log(solution(7))
        console.log(solution(8))
        console.log(solution(9))
        console.log(solution(10))
        console.log(solution(11))
        console.log(solution(12))
        expect(result).to.eql(5)
    });

});