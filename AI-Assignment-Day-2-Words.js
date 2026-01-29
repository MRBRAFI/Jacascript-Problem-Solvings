// 1 Get all of the words initializing with a

const words = ["apple", "banana", "apricot", "blueberry", "Avocado"];

const initialChecker = (words) => {
  return words.filter((word) => word.toLowerCase().startsWith("a"));
};

console.log(initialChecker(words), "From Initial Checker");

// 2 Get length of each word

const lengthChecker = (words) => {
  return words.map((word) => word.length);
};

console.log(lengthChecker(words), "From Length Checking");

// 3 Finding Total length of all words

const totalLength = (words) => {
  return words.reduce((acc, n) => acc + n.length, 0);
};

console.log(totalLength(words), "From Accumulated Length");
