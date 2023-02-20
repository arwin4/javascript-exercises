const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
	for (element of array) {
    sum += element;
  }
  return sum;
};

const multiply = function(array) {
  let multiplication = 1;
  for (element of array) {
    multiplication *= element;
  }
  return multiplication;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  if (num === 0) {return 1};
  // I was excited about reusing multiply() but it's not the fastest or shortest solution.
  let array = [num];
  for (let i = 1; i < num; i++) {
    array.push(num - i)
  }
  return multiply(array);
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
