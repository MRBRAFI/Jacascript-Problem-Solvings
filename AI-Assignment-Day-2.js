// 1. Get all even numbers using filter

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterEven = (num) => {
  const filteredNum = num.filter((even) => even % 2 === 0);

  return filteredNum;
};

console.log(filterEven(num), "From Filtering Nums");

// 2. Square all numbers using map

const squareNum = (num) => {
  const squared = num.map((int) => int * int);

  return squared;
};

console.log(squareNum(num), "From Square");

// 3. Sum of all numbers

const sumOfNums = (num) => {
  const sum = num.reduce((accumulator, nextEliment) => {
    return accumulator + nextEliment;
  }, 0);

  return sum;
};

console.log(sumOfNums(num), "From Sum By reduce()");

// 4 Sum of all even numbers

const sumOfEven = (num) => {
  const filteredNum = num.filter((int) => int % 2 === 0);

  const sum = filteredNum.reduce((accumulator, nextElement) => {
    return accumulator + nextElement;
  }, 0);

  return sum;
};

console.log(sumOfEven(num), "From Sum Of Even");
