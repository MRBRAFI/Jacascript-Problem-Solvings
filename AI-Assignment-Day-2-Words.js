// 1 Get all of the words initializing with a

const words = ["apple", "banana", "apricot", "blueberry", "Avocado"];

const initialChecker = (words) => {
  const initalA = words.filter((word) => {
    return word.toLowerCase()[0] === "a";
  });

  return initalA;
};

console.log(initialChecker(words), "From Initial Checker");

// 2 Get length of each word

const lengthChecker = (words) => {
  const length = words.map((word) => {
    return `${word} -- word length --> ${word.length}`;
  });
  return length;
};

console.log(lengthChecker(words), "From Length Checking");

// 3 Finding Total length of all words

const totalLength = (words) => {
  const length = words.reduce((accumulator, nextElement) => {
    return accumulator + nextElement.length;
  }, 0);

  return length;
};

console.log(totalLength(words), "From Accumulated Length");
