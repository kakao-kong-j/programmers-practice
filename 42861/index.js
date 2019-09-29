function solution(sticker) {
    let dp1 = new Array(); //첫번째를 뜯었을때
    let dp2 = new Array(); // 중간을 뜯었을때
    let len = sticker.length;
    if (len === 1) {
        return sticker[0];
    }

    dp1[0] = sticker[0];
    dp1[1] = dp1[0];
    for (let i = 2; i < len; ++i) {
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
    }

    dp2[0] = 0;
    dp2[1] = sticker[1];
    for (let i = 2; i < len; ++i) {
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);
    }
    return Math.max(dp1[len - 1], dp2[len - 1]);
}

function solution2(sticker) {
    let answer = 180;
    let len = sticker.length;
    let arr1 = new Array();
    let arr2 = new Array();
    let arr3 = new Array();
    let arr4 = new Array();

    if (len === 1) {
        return sticker[0];
    }

    return answer;
}
module.exports = {
    solution
};