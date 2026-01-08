let input = [5, 1, 9, 3];
let maximum = 0;

for (const inp of input) {
  if (maximum < inp) {
    maximum = inp;
  }
}

console.log(maximum);
