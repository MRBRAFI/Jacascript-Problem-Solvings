// 1 Counter with closure

function counter() {
  let counter = 0;

  function countit() {
    return (counter += 1);
  }

  return countit;
}

const funcCount = counter();

console.log(funcCount());
console.log(funcCount());

// 2 Creating person's name using closure

function creatPerson(name) {
  function createName() {
    return name;
  }
  return createName;
}

const nameCreated = creatPerson("Rafi");

console.log(nameCreated());

// 3 Multiplier with function

function multiplierFunc(multiplicand) {
  function multiplication(multiplier) {
    return multiplicand * multiplier;
  }

  return multiplication;
}

const multiplicate = multiplierFunc(2);

console.log(multiplicate(5));
