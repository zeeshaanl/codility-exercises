const findPrimeFactors = number => {
    const primeFactors = [];
    while (number % 2 === 0) {
        if (!primeFactors.includes(2)) {
            primeFactors.push(2);
        }
        number = number / 2;
    }
    for (let i = 3; i <= Math.sqrt(number); i++) {
        while (number % i === 0) {
            if (!primeFactors.includes(i)) {
                primeFactors.push(i);
            }
            number = number / i;
        }
    }

    if (number > 2) {
        primeFactors.push(number);
    }

    return primeFactors;
};

const findCommonPrimeFactors = (a, b) => {
    const aPrimeFactors = findPrimeFactors(a);
    const bPrimeFactors = findPrimeFactors(b);
    return aPrimeFactors.length === bPrimeFactors.length && aPrimeFactors.every((value) => bPrimeFactors.includes(value));
};
console.log(findCommonPrimeFactors(75, 15));
// console.log(findLcm(24, 128));