const {
    solution
} = require("./index")
const {
    expect
} = require("chai")


describe("베스트 앨범", () => {
    it("test1", () => {
        const genres = ["classic", "pop", "classic", "classic", "pop"]
        const plays = [500, 600, 150, 800, 2500]
        const result = solution(genres, plays)
        expect(result).to.eql([4, 1, 3, 0])
    });
});