function solution(array, commands) {
    const result = []
    for (const command of commands) {
        result.push(array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)[command[2] - 1])
    }
    console.log(`result : ${result}`)
    return result;
}
module.exports = {
    solution
}