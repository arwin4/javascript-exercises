const sumAll = function (first, second) {
    for (element of arguments) {
        // isNaN or some such does not work because NaN is a specific type
        if (!Number.isInteger(element)) {
            return 'ERROR';
        }
        else if (element < 0) {
            return 'ERROR';
        }
    }

    let sum = 0;
    let smaller;
    let larger;
    if (first < second) {
        smaller = first;
        larger = second;
    } else {
        smaller = second;
        larger = first;
    }
    for (let i = smaller; i <= larger; i++) {
        sum += i;
        console.log(sum);
    }
    return sum;
}

console.log(sumAll(1, '3'));

// Do not edit below this line
module.exports = sumAll;
