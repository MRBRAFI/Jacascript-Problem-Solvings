let inp = "madam";
let distort = inp.split("");
let reverseDistortion = distort.reverse();
let joinDistortion = reverseDistortion.join("");

if (inp.toLowerCase() === joinDistortion.toLowerCase()) {
  console.log(joinDistortion);
  console.log(true);
} else {
  console.log(joinDistortion);

  console.log(false);
}
