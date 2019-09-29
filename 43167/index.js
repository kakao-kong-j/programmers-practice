function solution(goods, boxes) {
    goods.sort((a, b) => b - a)
    boxes.sort((a, b) => b - a)
    let usedBoxes = []
    let usedGoods = []
    let answer = 0
    for (let i = 0; i < goods.length; i++) {
        for (let j = 0; j < boxes.length; j++) {
            if (!(usedGoods.find((a) => a === i)) &&
                !(usedBoxes.find((a) => a === j)) &&
                (goods[i] <= boxes[j])
            ) {
                answer++
                usedGoods.push(i)
                usedBoxes.push(j)
            }
        }
    }
    console.log(usedBoxes)
    console.log(usedGoods)
    return answer
}
module.exports = {
    solution
}