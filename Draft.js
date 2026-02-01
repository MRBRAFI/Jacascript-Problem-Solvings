// Question 1
const obj1 = { name: "Rafi" };
const obj2 = obj1;
obj2.name = "Sarah";
console.log(obj1.name);
// What's the output?

// Question 2
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
arr2.push(4);
console.log(arr1);
// What's the output?

// // Question 3
const num1 = 10;
const num2 = num1;
console.log(num1);
// What's the output?

// Question 4
const person1 = { age: 25 };
const person2 = person1;
const person3 = { ...person1 };
person2.age = 30;
person3.age = 35;
console.log(person1.age);
// What's the output?
