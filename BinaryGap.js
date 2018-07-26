// Find the longest sequence of zeros in binary representation of an integer

const longestSequenceOfZeros = (number) => {
    const binaryRepresentation = '1001000011010100111100000000';
    const arrayOfZeroes = binaryRepresentation.split('1');
    return arrayOfZeroes.sort().reverse()[0].length
};

console.log(longestSequenceOfZeros(4));
