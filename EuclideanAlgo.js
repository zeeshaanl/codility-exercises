const findGcd = (a, b) => {
    if (a < b) {
        [a, b] = [b, a]
    }
    return b ? findGcd(b, a % b) : a;
};
const findLcm = (a, b) => {
    return a * b / findGcd(a, b);
};

console.log(findLcm(12,30));