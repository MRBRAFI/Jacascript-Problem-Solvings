let inp = "programming";
let distorts = inp.split("");
let vowelCounter = 0;

for (const distort of distorts) {
  if (
    distort === "a" ||
    distort === "e" ||
    distort === "i" ||
    distort === "o" ||
    distort === "u"
  ) {
    vowelCounter += 1;
  }
}
console.log(vowelCounter);
