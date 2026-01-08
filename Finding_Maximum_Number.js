let input = [5, 1, 9, 3];
let reservoir = 0;

for (const inp of input) {
  if (reservoir < inp) {
    reservoir = inp;
  }
}

console.log(reservoir);
