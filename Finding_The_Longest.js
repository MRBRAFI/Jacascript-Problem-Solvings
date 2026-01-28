const sentence = "I love programming in JavaScript but not Phythonfor";

const longestWord = (sentence) => {
  let setLargestNum = 0;
  let setLargestWord = "";
  const splitSentence = sentence.split(" ");

  splitSentence.forEach((data) => {
    if (data.length > setLargestNum) {
      setLargestNum = data.length;
      setLargestWord = data;
    }
  });

  return { setLargestNum, setLargestWord };
};

console.log(longestWord(sentence));
