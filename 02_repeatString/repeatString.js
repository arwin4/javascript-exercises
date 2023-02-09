// Convoluted compared to TOP's solution

const repeatString = function (string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    else if (num === 0) {
        return '';
    } else {
        let newString = string;
        for (let i = num - 1; i > 0; i--) {
            newString = newString.concat(string);
        }
        return newString;
    }
}


// Do not edit below this line
module.exports = repeatString;
