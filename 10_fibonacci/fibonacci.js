const fibonacci = function(num) {
    if (num < 0) return 'OOPS';
    // I forgot this line:
    if (num === 0) return 0;

    let sequence = [1, 1];
    for (let i = 3; i <= num; i++) {
        sequence.push(sequence[i - 3] + sequence[i - 2]);
    }
    return sequence[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
