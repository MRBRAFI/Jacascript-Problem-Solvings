let input = [1, 2, 2, 3, 4, 4];
let reservoir = [];
for (const inp of input) {
  if (!reservoir.includes(inp)) {
    reservoir.push(inp);
  }
}
console.log(reservoir);
