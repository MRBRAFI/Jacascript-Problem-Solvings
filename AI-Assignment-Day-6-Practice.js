const isValid = (arr) => {
  const pair = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];

  let char = "";

  for (let i = 0; i < arr.length; i++) {
    char = arr[i];

    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      let lastCheck = stack.pop();

      if (pair[char] !== lastCheck) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid("[}[}[")); // true
