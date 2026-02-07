function isValid(s) {
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      const lastOpening = stack.pop();

      if (pairs[char] !== lastOpening) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Test it:
console.log(isValid("()")); // true
console.log(isValid("[(}()]")); // false
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
