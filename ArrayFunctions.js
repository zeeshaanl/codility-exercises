// https://stackoverflow.com/questions/43528075/how-to-use-javascript-in-hackerrank-and-hackerearth
// process.stdout.write("\n");

// Array functions

const sumOfArray = arrayOfInts =>
    arrayOfInts.reduce((total, amount) =>
        amount + total
    );

const averageOfArray = arrayOfInts =>
    arrayOfInts.reduce((total, amount, index, array) => {
        const sum = total + amount;
        if (index === array.length - 1) {
            return sum / array.length
        }
        return sum;
    });

const doubleValues = arrayOfInts =>
    arrayOfInts.map((val) => 2 * val);

const tallyValues = arrayOfStrings =>
    arrayOfStrings.reduce((total, currentValue, index, array) => {
        total[currentValue] = (total[currentValue] || 0) + 1;
        return total;
    }, {});

const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];

const leftRotate = (arrayofInts, noOfMoves) => {
    // const arrayOfKeys = Object.keys(arrayofInts);
    return arrayofInts.reduce((total, currentValue, index, array) => {
        const movedDifference = index - noOfMoves;
        const movedIndex = movedDifference >= 0 ? movedDifference : array.length + movedDifference;
        total[movedIndex] = array[index];
        return total;
    }, [])
};

const bubbleSort = (arrayOfInts) => {
    let isSorted = false;
    let numberOfSwaps = 0;
    const swapValuesInArray = (arrayOfInts) => {
        isSorted = true;
        for (let i = 0; i < arrayOfInts.length; i++) {
            if (arrayOfInts[i] > arrayOfInts[i + 1]) {
                [arrayOfInts[i], arrayOfInts[i + 1]] = [arrayOfInts[i + 1], arrayOfInts[i]];
                numberOfSwaps++;
                isSorted = false;
            }
        }
    };
    swapValuesInArray(arrayOfInts);
    while (!isSorted) {
        swapValuesInArray(arrayOfInts);
    }

    process.stdout.write(`Array is sorted in ${numberOfSwaps} swaps. \n`);
    process.stdout.write(`First Element: ${arrayOfInts[0]} \n`);
    process.stdout.write(`Last Element: ${arrayOfInts[arrayOfInts.length - 1]} \n`);
};

bubbleSort([7, 5, 4, 6, 3, 2, 1]);
