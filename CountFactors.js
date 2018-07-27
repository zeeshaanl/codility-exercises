const isPrime = number => {
    if (number === 1) {
        return false;
    }
    let isPrime = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    return isPrime;
};

const listFactors = number => {
    if (number === 0) {
        return 0
    }
    const arrayOfFactors = [1];

    for (let i = 2; i <= number; i++) {
        const remainder = number % i;
        if (remainder === 0) {
            arrayOfFactors.push(i)
        }
    }

    return arrayOfFactors;
};

const listPrimeFactors = number => {
    const factors = listFactors(number);
    return factors.filter(isPrime);
};

console.log(listPrimeFactors(512));