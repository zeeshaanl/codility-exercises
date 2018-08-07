/**
 *
 * @param data
 * @param target
 * @param start
 * @param end
 * @returns {*}
 */
const binarySearch = (data, target, start, end) => {
    const middle = Math.floor((start + end) / 2);
    if (target === data[middle].number) {
        return data[middle];
    }

    if (end - 1 === start) {
        return Math.abs(data[start].number - target) > Math.abs(data[end].number - target) ? data[end] : data[start];
    }

    if (target > data[middle].number) {
        return binarySearch(data, target, middle, end)
    }

    if (target < data[middle].number) {
        return binarySearch(data, target, start, middle)
    }
};

const data = [
    { number: 1367.844, data: 'Jack' },
    { number: 1684.478, data: 'Joe' },
    { number: 1168.474, data: 'John' },
    { number: 1344.854, data: 'Rob' },
    { number: 1543.854, data: 'Jerry' },
    { number: 1224.854, data: 'Harry' },
    { number: 1924.854, data: 'Gerard' },
    { number: 1224.853, data: 'Garry' },
    { number: 1224.85299, data: 'Berta' },
];
const sortedData = data.sort((a, b) => a.number - b.number);
const target = 1345;

console.log(binarySearch(sortedData, target, 0, data.length - 1));