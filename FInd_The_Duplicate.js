const inputs = [1, 1, 1, 2, 2, 3, 4, 4, 4, 4];

const findTheDuplicate = (inputs) => {
  const filteredNumbers = [];
  const duplicates = [];
  for (const input of inputs) {
    if (!filteredNumbers.includes(input)) {
      filteredNumbers.push(input);
    } else if (!duplicates.includes(input)) {
      duplicates.push(input);
    }
  }
  return duplicates;
};

console.log(findTheDuplicate(inputs));
