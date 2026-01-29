// 1. Get all even numbers using filter

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterEven = (num) => {
  return num.filter((even) => even % 2 === 0);
};

console.log(filterEven(num), "From Filtering Nums");

// 2. Square all numbers using map

const squareNum = (num) => {
  return num.map((int) => int * int);
};

console.log(squareNum(num), "From Square");

// 3. Sum of all numbers

const sumOfNums = (num) => {
  return num.reduce((acc, n) => acc + n, 0);
};

console.log(sumOfNums(num), "From Sum By reduce()");

// 4 Sum of all even numbers

const sumOfEven = (num) => {
  return num.filter((int) => int % 2 === 0).reduce((acc, n) => acc + n, 0);
};

console.log(sumOfEven(num), "From Sum Of Even");
