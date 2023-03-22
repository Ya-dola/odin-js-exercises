const fibonacci = function (num) {
    // Convert the input to a number
    num = Number(num);

    // Handle negative input
    if (num < 0) {
        return "OOPS";
    }

    // Handle base cases
    if (num === 0 || num === 1) {
        return num;
    }

    // Calculate the fibonacci sequence using a loop
    let prev = 0;
    let curr = 1;
    for (let i = 2; i <= num; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }

    // Return the result
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
