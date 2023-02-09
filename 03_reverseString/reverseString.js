// Obviously, I was unaware of .split(). Hence this solution.
// Hey, this allowed me to practice for loops, so I'll take it.

const reverseString = function (str) {
    let reversed = [];

    for (let i = 0; i < str.length; i++) {
        let letter;
        letter = str.slice(i, i + 1);
        reversed.push(letter);
    }
    reversed.reverse();
    return reversed.join('');
}

// Do not edit below this line
module.exports = reverseString;
