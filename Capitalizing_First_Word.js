let input = "hello world";
let inpArray = input.split(" ");
let result = [];

for (const inp of inpArray) {
  let firstLetter = inp[0].toUpperCase();
  let restOfWord = inp.slice(1);
  let capitalizedWord = firstLetter + restOfWord;
  result.push(capitalizedWord);
}

console.log(result.join(" "));
