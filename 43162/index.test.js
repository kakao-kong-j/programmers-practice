const {
    solution
} = require("./index")
const {
    expect
} = require("chai")


describe("네트워크", () => {
    it("test1", () => {
        const n = 3
        const computers = [
            [1, 1, 0],
            [1, 1, 0],
            [0, 0, 1]
        ]
        const result = solution(n, computers)
        expect(result).to.eql(2)
    });
    it("test1", () => {
        const n = 3
        const computers = [
            [1, 1, 0],
            [1, 1, 1],
            [0, 1, 1]
        ]
        const result = solution(n, computers)
        expect(result).to.eql(1)
    });
});