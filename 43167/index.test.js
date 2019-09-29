const {
    solution
} = require("./index")
const {
    expect
} = require("chai")


describe("타겟넘버", () => {
    it("test1", () => {
        const goods = [5, 3, 7]
        const boxs = [3, 7, 6]
        const result = solution(goods, boxs)
        expect(result).to.eql(3)
    });

    it("test1", () => {
        const goods = [1, 2]
        const boxs = [2, 3, 1]
        const result = solution(goods, boxs)
        expect(result).to.eql(2)
    });

    it("test1", () => {
        const goods = [3, 8, 6]
        const boxs = [5, 6, 4]
        const result = solution(goods, boxs)
        expect(result).to.eql(2)
    });

});