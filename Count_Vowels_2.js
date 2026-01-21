let vowels = "JavaScrIpt";
let vowelCounter = 0;
const vowelSplitter = vowels.split("");

for (const vowel of vowelSplitter) {
  if (
    vowel === "a" ||
    vowel === "e" ||
    vowel === "i" ||
    vowel === "o" ||
    vowel === "u" ||
    vowel === "A" ||
    vowel === "E" ||
    vowel === "I" ||
    vowel === "O" ||
    vowel === "U"
  ) {
    vowelCounter += 1;
  }
}
console.log(vowelCounter);

// console.log(vowelSplitter);
