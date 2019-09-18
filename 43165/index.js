function solution(numbers, target) {
    const maxCount = Math.pow(2, numbers.length)
    let answer = 0
    for (let i = 0; i < maxCount; i++) {
        let bin = i.toString(2)
        if (bin.length < numbers.length) {
            const fake = numbers.length - bin.length
            const arr = new Array(fake).fill("0")
            arr.push(bin)
            bin = arr.join("")
        }
        const result = numbers.reduce((acc, cur, index) => {
            return (acc | 0) + (cur | 0) * (bin[index] | 0 ? 1 : -1)
        }, 0)
        if (result === target) {
            answer++
        }
    }
    return answer;
}
module.exports = {
    solution
}