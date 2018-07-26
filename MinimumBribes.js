const minimumBribes = arrayOfInts => {
    const sortedArray = [...arrayOfInts].sort(arrayOfInts);
    let bribes = 0;
    for (let i = 0; i < sortedArray.length; i++) {
        const valAtSortedPosition = sortedArray[i];
        const valAtBribedPosition = arrayOfInts[i];
        if (valAtBribedPosition !== valAtSortedPosition) {
            const changesNumber = Math.abs(sortedArray.indexOf(valAtBribedPosition) - arrayOfInts.indexOf(valAtBribedPosition));
            if (changesNumber > 2) {
                return 'Too many bribes'
            }
            bribes = bribes + changesNumber;
        }
    }
    return bribes / 2;
};

console.log(minimumBribes([ 1,2,5,3,7,8,6,4 ]));