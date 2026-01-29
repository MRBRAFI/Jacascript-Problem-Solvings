const students = [
  { name: "Rafi", marks: 85, subject: "Math" },
  { name: "Sarah", marks: 92, subject: "Science" },
  { name: "John", marks: 78, subject: "Math" },
  { name: "Emma", marks: 88, subject: "Science" },
  { name: "Ali", marks: 95, subject: "Math" },
];

// Problem 1: Get average marks of all students
// Expected output: 87.6

const getAverage = (students) => {
  return (
    students.reduce((reservoir, student) => reservoir + student.marks, 0) /
    students.length
  );
};

console.log(getAverage(students), "From Average Output");

// Problem 2: Get all students who scored above 85
// Expected output: Array of 3 student objects

const topStudents = (students) => {
  return students.filter((student) => student.marks > 85);
};

console.log(topStudents(students), "From Top Students");

// Problem 3: Get array of just student names
// Expected output: ['Rafi', 'Sarah', 'John', 'Emma', 'Ali']

const getNames = (students) => {
  return students.map((student) => student.name);
};

console.log(getNames(students), "From Getting Student Names");

// Problem 4: Find the student with highest marks
// Expected output: { name: 'Ali', marks: 95, subject: 'Math' }

const getTheHighest = (students) => {
  return students.reduce((reservoir, student) => (reservoir = student), 0);
};

console.log(getTheHighest(students), "From The Topper");

// Problem 5: Calculate average marks for Math students only
// Expected output: 86

// Problem 6: Group students by subject
// Expected output: Object with Math and Science arrays
