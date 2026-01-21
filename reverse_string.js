// Solution 1

const str = "joinReversed";
const reverseString = (str) => {
  let reversedStr = [];
  for (const word of str) {
    reversedStr.unshift(word);
  }
  const joinReversed = reversedStr.join("");
  return joinReversed;
};

console.log(reverseString(str));

// Solution 2

const simpleSolution = str.split("").reverse().join("");
console.log(simpleSolution);

// Solution 3
const strs = "joinReversed";

let reversedContainer = "";
for (let i = strs.length - 1; i >= 0; i--) {
  reversedContainer += strs[i];
}
console.log(reversedContainer);
