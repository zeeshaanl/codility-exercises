// Find two integers that multiply to twenty

const multipleToTwenty = (numberArray) => {
    const arrayLength = numberArray.length;
    for (let i = 0; i < arrayLength; i++) {
        for (let j = i + 1; j < arrayLength; j++) {
            if (numberArray[i] * numberArray[j] === 20) {
                return `The numbers are ${numberArray[i]} and ${numberArray[j]}`
            }
        }
    }
    return 'No numbers multiple to twenty'
};

const answer = multipleToTwenty([1,7,3,4,6,8,5]);
console.log(answer);