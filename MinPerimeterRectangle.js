const findMinimumPerimeter = area => {
    let minimumPerimeter = null;
    for (let i = 1; i <= Math.sqrt(area); i++) {
        if (area % i === 0) {
            const lengthA = i;
            const lengthB = area / i;
            const perimeter = 2 * (lengthA + lengthB);
            if (!minimumPerimeter || minimumPerimeter > perimeter) {
                minimumPerimeter = perimeter;
            }
        }
    }
    return minimumPerimeter;
};

console.log(findMinimumPerimeter(60));