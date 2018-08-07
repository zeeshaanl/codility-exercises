const listFactors = number => {
    if (number === 0) {
        return [0]
    }
    const arrayOfFactors = [];

    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            !arrayOfFactors.includes(i) && arrayOfFactors.push(i);
            !arrayOfFactors.includes(number / i) && arrayOfFactors.push(number / i);
        }
    }

    return arrayOfFactors;
};

console.log(listFactors(36));