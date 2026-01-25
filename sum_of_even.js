const numbers = [1, 2, 4, 5, 4, 6, 2, 1, 3, 5, 9, 4, 8, 4, 3, 1, 596, 54, 85];

const sumOfEven = (numbers) => {
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      sum += number;
    }
  }
  return sum;
};

console.log(sumOfEven(numbers));
