const {
    solution
} = require("./index")
const {
    expect
} = require("chai")


describe("조이스틱", () => {
    it("test1", () => {
        const name = "JEROEN"
        const result = solution(name)
        expect(result).to.eql(55)
    });
    it("test1", () => {
        const name = "JAN"
        const result = solution(name)
        expect(result).to.eql(23)
    });

});