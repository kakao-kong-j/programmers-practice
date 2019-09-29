function solution(bishops) {
    function isValidation(leftIndex, rightIndex) {
        return leftIndex >= 0 && rightIndex >= 0 && leftIndex <= 7 && rightIndex <= 7
    }

    function rightup(leftIndex, rightIndex) {
        arr[leftIndex][rightIndex] = false

        if (isValidation(leftIndex + 1, rightIndex + 1)) {
            rightup(leftIndex + 1, rightIndex + 1)
        }
    }

    function leftup(leftIndex, rightIndex) {
        arr[leftIndex][rightIndex] = false
        if (isValidation(leftIndex - 1, rightIndex + 1)) {
            leftup(leftIndex - 1, rightIndex + 1)
        }
    }

    function leftdown(leftIndex, rightIndex) {
        arr[leftIndex][rightIndex] = false
        if (isValidation(leftIndex - 1, rightIndex - 1)) {
            leftdown(leftIndex - 1, rightIndex - 1)
        }
    }

    function rightdown(leftIndex, rightIndex) {
        arr[leftIndex][rightIndex] = false
        if (isValidation(leftIndex + 1, rightIndex - 1)) {
            rightdown(leftIndex + 1, rightIndex - 1)
        }
    }
    let converter = {
        "A": 0,
        "B": 1,
        "C": 2,
        "D": 3,
        "E": 4,
        "F": 5,
        "G": 6,
        "H": 7,
    }
    let arr = [
        [true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true],
        [true, true, true, true, true, true, true, true]
    ]


    for (const bishop of bishops) {
        const leftIndex = converter[bishop[0]]
        const rightIndex = parseInt(bishop[1]) - 1

        rightup(leftIndex, rightIndex)
        rightdown(leftIndex, rightIndex)
        leftup(leftIndex, rightIndex)
        leftdown(leftIndex, rightIndex)
    }
    const answer = arr.reduce((acc, cur) => {
        return acc + cur.filter(a => !!a).length
    }, 0)
    return answer
}
module.exports = {
    solution
}