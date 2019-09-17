function solution(n, lost, reserve) {
    let count = n - lost.length
    let alreadyDone = []
    lost.forEach(element => {
        const target = reserve.filter(e => e === element - 1 || e === element || e === element - 2)
        target[0]
        alreadyDone.push(target[0])
    });
    return count;
}
module.exports = {
    solution
}