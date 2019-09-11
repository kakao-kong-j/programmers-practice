function solution(clothes) {
    const m = new Map()
    let result = 1
    for (const cloth of clothes) {
        const item = cloth[0]
        const suitCase = cloth[1]
        if (m.has(suitCase)) {
            m.set(suitCase, [...m.get(suitCase), item])
        } else {
            m.set(suitCase, [item])
        }
    }
    for (const value of m.values()) {
        result *= value.length + 1
    }
    return result - 1
}

module.exports = {
    solution
}