const cache = [1, 2, 3];

function solution(n) {
    if (cache[n - 1]) return cache[n - 1];
    cache[n - 1] = (solution(n - 1) + solution(n - 2)) % 1000000007;
    return cache[n - 1];
}
module.exports = {
    solution
}