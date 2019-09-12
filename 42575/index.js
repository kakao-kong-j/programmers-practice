function solution(arr1, arr2) {
    return Object.values(arr1).map((e1, i1) => e1.map((e2, i2) => e2 + arr2[i1][i2]))
}

module.exports = {
    solution
}