let inp = "hello";

const reverse = (variable) => {
  let takeInp = variable.split("");
  let reverseInp = takeInp.reverse();
  let joinInp = reverseInp.join("");
  console.log(joinInp);
};

reverse(inp);
