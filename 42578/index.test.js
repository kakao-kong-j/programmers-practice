const {
    solution
} = require("./index")
const {
    expect
} = require("chai")


describe("위장", () => {
    it("test1", () => {
        const clothes = [
            ["yellow_hat", "headgear"],
            ["blue_sunglasses", "eyewear"],
            ["green_turban", "headgear"]
        ]
        const result = solution(clothes)
        expect(result).equal(5)
    });
    it("test2", () => {
        const clothes = [
            ["crow_mask", "face"],
            ["blue_sunglasses", "face"],
            ["smoky_makeup", "face"]
        ]
        const result = solution(clothes)
        expect(result).equal(3)
    });
});