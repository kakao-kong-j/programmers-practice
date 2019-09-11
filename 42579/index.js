function solution(genres, plays) {
    const result = []
    for (const [index, genre] of genres.entries()) {
        result.push({
            index,
            genre,
            play: plays[index]
        })
    }

    const genresCount = Object.values(genres).reduce((acc, cur, index) => {
        acc[cur] = acc[cur] ? acc[cur] + plays[index] : plays[index]
        return acc
    }, {})
    const genresSort = Object.keys(genresCount).sort((a, b) => genresCount[b] - genresCount[a])
    const resultObj = []
    for (const [index, genreSort] of genresSort.entries()) {
        resultObj[index] = result.filter((a) => a.genre === genreSort)
    }
    const resultSort = resultObj.map((r) => {
        r.sort((a, b) => {
            if (b.play > a.play) {
                return 1
            } else if (b.play < a.play) {
                return -1
            } else {
                return b.index < a.index
            }
        })
        return r
    })


    return resultSort.reduce((acc, cur) => {
        acc.push(...cur.slice(0, 2))
        return acc
    }, []).map((r) => r.index)



}
module.exports = {
    solution
}