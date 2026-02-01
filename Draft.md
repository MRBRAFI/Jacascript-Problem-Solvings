Q1 ---

\*\*\* took help from mdn,AI

The difference between map() and forEach() is map() returns an array and it can be stored in a variable which we can use later on the other hand forEach returns nothing except undefined because forEach is designed for side effects like logging or updating something and as It returns nothing we cannot store the data into anywhere.

Q2 ---

reduce() is a function which combines all the values in an array and gives only one accumulated result,

Example

const nums = [1, 2, 3, 4, 5];
const accumulatedResult = nums.reduce((acc, n) => acc + n, 0);

console.log(accumulatedResult);

Q3 ---

The difference between Double equal (==) and Triple equal (===) is both are used to check both sides but Double equal (==) checks only the value if the values of both side matches whether it is string or number if both side have same values like 1 == '1' it returns true. On the other hand, Triple equal (===) checks both the values and there types like 1 === '1' will return false, because first one is a number and the second one is a string.

Q4 ---

\*\*\* took help from mdn

The out put of this

const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);
console.log(arr1);

will be [1,2,3,4]. Because, arr2 creates a shallow copy of arr1 and stores the exact value into it, but mutating it or pushing something into the so called copy arr2 will cause pushing the same thing into arr1.

the only way possible is using spread operator

const nums = [1, 2, 3, 4, 5];
const nums2 = [...nums];
nums2.push(6);
console.log(nums);
console.log(nums2);

Q5 ---

\*\*\* took help from mdn, blogs and AI

A closure is when an inner function can access and remeber a value declared in its outer function, whether the function is completely excecuted the inner function will always remeber the value it got in its scope.

here is a simple example of closure ---

function outer() {
const name = "MRB";

function inner() {
return name;
}
return inner();
}

const counter = outer();

console.log(counter);

Q6 ---

code --

const nums = [1, 2, 3, 4, 5];
const result = nums.filter(n => n > 2).map(n => n \* 2);
console.log(result);

output -- [6,8,10]

Q7 ---

\*\*\* took help from AI,

The output is undefined of this function

function test() {
console.log(a);
var a = 5;
}
test();

and the reason of it is the hoisting of var. Because, when a variable is declared by var javascript takes the variable to the top but the assignment stays in the exact place where the variable is called,
