let vowels = "JavaScrIpt";

const countVowels = (vowels) => {
  const vowelList = "aeiouAEIOU";
  let vowelCounter = 0;

  for (const vowel of vowels) {
    if (vowelList.includes(vowel)) {
      vowelCounter += 1;
    }
  }

  return vowelCounter;
};
console.log(countVowels(vowels));
