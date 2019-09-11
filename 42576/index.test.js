const {
    solution
} = require("./index")
const {
    expect
} = require("chai")


describe("완주하지 못한 선수", () => {
    it("test1", () => {
        const participant = ["leo", "kiki", "eden"]
        const completion = ["eden", "kiki"]
        const result = solution(participant, completion)
        expect(result).equal("leo")
    });
    it("test2", () => {
        const participant = ["marina", "josipa", "nikola", "vinko", "filipa"]
        const completion = ["josipa", "filipa", "marina", "nikola"]
        const result = solution(participant, completion)
        expect(result).equal("vinko")
    });
    it("test3", () => {
        const participant = ["mislav", "stanko", "mislav", "ana"]
        const completion = ["stanko", "ana", "mislav"]
        const result = solution(participant, completion)
        expect(result).equal("mislav")
    });
});