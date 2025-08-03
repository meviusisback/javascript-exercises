const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  return arr.reduce((acc, val) => acc + val, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, val) => acc * val, 1);
};

const power = function (x, y) {
  return Math.pow(x, y);
};

const factorial = function (x) {
  if (x === 0) return 1;
  let prod = 1;
  for (let i = 1; i <= x; i++) {
    prod *= i;
  }
  return prod;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
