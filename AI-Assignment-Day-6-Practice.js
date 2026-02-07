// 1. using unshift method

const revers1 = (strs1) => {
  const stack = [];

  for (const str of strs1) {
    stack.unshift(str);
  }

  return stack.join("");
};

console.log(revers1("stack"));

// 2. using reverse counting method

const reverse2 = (strs2) => {
  const stack = [];

  let reverseCount = "";

  for (const str of strs2) {
    stack.push(str);
  }

  for (let i = stack.length - 1; i >= 0; i--) {
    reverseCount += stack[i];
  }

  return reverseCount;
};

console.log(reverse2("stack"));

// using prince of persia (pop) method

const reverse3 = (strs3) => {
  const stack = [];

  let reverser = "";

  for (const str of strs3) {
    stack.push(str);
  }

  for (let i = stack.length - 1; i >= 0; i--) {
    reverser += stack.pop();
  }
  return reverser;
};

console.log(reverse3("hello"));
