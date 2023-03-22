const palindromes = function (str) {

    // Remove all non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Reverse the cleaned string and check if it's matching the cleaned string
    return cleanedStr.split('').reverse().join('') === cleanedStr;
};
// Do not edit below this line
module.exports = palindromes;
