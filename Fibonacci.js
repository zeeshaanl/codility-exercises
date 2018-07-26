const findFibonacci = n => {
    if (n === 0) {
        return 0
    }
    if (n <= 2) {
        return 1
    }

    let sum = 2;

    let fiboArray = [1, 1];

    for (let i = 0; i < n - 2; i++) {

        fiboArray.push(fiboArray[fiboArray.length - 1] + fiboArray[fiboArray.length - 2])
    }

    return fiboArray[n - 1];
};

console.log(findFibonacci(15));

// 1 1 2 3 5 8 13 21 34