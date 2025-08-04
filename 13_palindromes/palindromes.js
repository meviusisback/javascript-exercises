const palindromes = function (str) {
  const letters = [...str.toLowerCase()]
    .filter((char) => /[a-z0-9]/i.test(char))
    .join("");
  return letters.split("").reverse().join("") === letters;
};

// Do not edit below this line
module.exports = palindromes;
