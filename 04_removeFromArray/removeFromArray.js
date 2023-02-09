const removeFromArray = function (array, ...args) {
    toBeRemoved = Array.from(args);
    toBeRemoved.forEach(element => {
        for (let i = 0; i <= array.length; i++) {
            if (array[i] === element) {
                array.splice(i, 1)
            }
        }
    });
    return array;
}

console.log(removeFromArray([1, 2, 3, 4], 1, 2, 2, 3, 0, -1, 10));

// After seeing the solution, let's note that you can use .filter for this:
// const removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }
// And you can avoid using the for loop by using .includes.

// Do not edit below this line
module.exports = removeFromArray;
