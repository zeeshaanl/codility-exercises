// Find all prime numbers upto and including a number - Algorithm used: Sieve of Eratosthenes

const listAllPrimeNumbers = limitNumber => {
    const excludedUpperLimit = limitNumber + 1;
    const sieve = new Array(excludedUpperLimit).fill(true);

    for (let i = 2; i <= Math.sqrt(excludedUpperLimit); i++) {
        if (sieve[i]) {
            for (let j = i * i; j < excludedUpperLimit; j += i) {
                sieve[j] = false
            }
        }
    }

    return sieve.reduce((total, currentValue, currentIndex, array) => {
        if (currentIndex > 1 && currentValue) {
            total.push(currentIndex);
        }
        return total
    }, [])
};

console.log(listAllPrimeNumbers(16));