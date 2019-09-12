const {
    solution
} = require("./index")
const {
    expect
} = require("chai")


describe("K번째수", () => {
    it("test1", () => {
        const array = [1, 5, 2, 6, 3, 7, 4]
        const commands = [
            [2, 5, 3],
            [4, 4, 1],
            [1, 7, 3]
        ]

        const result = solution(array, commands)
        expect(result).to.eql([5, 6, 3])
    });

});