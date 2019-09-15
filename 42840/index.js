function solution(answers) {
    const player1 = [1, 2, 3, 4, 5]
    const player2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const player3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let player1Count = 0
    let player2Count = 0
    let player3Count = 0
    for ([index, answer] of answers.entries()) {
        if (answer === player1[(index % player1.length)]) {
            player1Count++
        }
        if (answer === player2[(index % player2.length)]) {
            player2Count++
        }
        if (answer === player3[(index % player3.length)]) {
            player3Count++
        }
    }
    const max = Math.max(player1Count, player2Count, player3Count)
    const result = []
    if (player1Count === max) result.push(1)
    if (player2Count === max) result.push(3)
    if (player3Count === max) result.push(2)
    return result.sort((a, b) => a - b)
}

module.exports = {
    solution
}