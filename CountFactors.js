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

console.log(listFactors(57));