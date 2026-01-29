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
  return Math.round(
    students.reduce((acc, n) => acc + n.marks, 0) / students.length,
  );
};

console.log(getAverage(students));

// Problem 2: Get all students who scored above 85
// Expected output: Array of 3 student objects

// Problem 3: Get array of just student names
// Expected output: ['Rafi', 'Sarah', 'John', 'Emma', 'Ali']

// Problem 4: Find the student with highest marks
// Expected output: { name: 'Ali', marks: 95, subject: 'Math' }

// Problem 5: Calculate average marks for Math students only
// Expected output: 86

// Problem 6: Group students by subject
// Expected output: Object with Math and Science arrays
