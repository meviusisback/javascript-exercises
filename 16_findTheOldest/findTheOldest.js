const findTheOldest = function (arr) {
  const getAge = (p) =>
    (p.yearOfDeath || new Date().getFullYear()) - p.yearOfBirth;

  const oldest = arr.reduce((acc, val) =>
    getAge(acc) < getAge(val) ? val : acc
  );
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
