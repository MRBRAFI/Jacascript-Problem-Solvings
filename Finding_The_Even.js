let numbers = [1, 2, 3, 4, 5, 6, 8, 10, 50, 1, 65, 564];
let evenReservoir = [];

for (const number of numbers) {
  if (number % 2 === 0) {
    evenReservoir.push(number);
  }
}

console.log(evenReservoir);
