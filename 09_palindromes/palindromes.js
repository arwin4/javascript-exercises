const palindromes = function (string) {
    let forwards = string.toLowerCase().replace(/[^a-z]/g, '');
    forwards = forwards.split('');
    return (forwards.toString() === forwards.reverse().toString());
};

// Do not edit below this line
module.exports = palindromes;
