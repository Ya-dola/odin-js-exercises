const sumAll = (num1, num2) => {
    // Check if both arguments are numbers
    if (typeof num1 !== 'number' || typeof num2 !== 'number')
        return 'ERROR';


    // Check if either argument is negative
    if (num1 < 0 || num2 < 0)
        return 'ERROR';


    // Determine the minimum and maximum values
    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);

    // Calculate the sum of all integers in the range
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
