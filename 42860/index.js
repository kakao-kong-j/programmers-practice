function solution(name) {
    const nn = name.split("")
    let count = 0
    for (const n of nn) {
        if (n.charCodeAt() > 77) {
            count += (90 - n.charCodeAt())
        } else {
            count += (n.charCodeAt() - 65)
        }
        console.log(count)
        count++
    }
    return count - 1
}
module.exports = {
    solution
}