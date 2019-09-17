function solution(n, lost, reserve) {
    let count = n - lost.length
    let alreadyDone = []

    lost.forEach(element => {
        const target = reserve.filter(e => (e === element - 1 || e === element || e === element + 1) && !alreadyDone.includes(e))
        if (target && target.length > 0) {
            count++
            alreadyDone.push(target[0])
        }
    });
    return count;
}
module.exports = {
    solution
}