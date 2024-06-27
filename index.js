//ADDING ELEMENTS IN AN ARRAY

// const numbers = [3, 4];

// // add array to end
// numbers.push(5, 6);
// console.log(numbers);

// // add array to beginning
// numbers.unshift(7, 8);
// console.log(numbers);

// // add array to middle
// numbers.splice(3, 0, "a", "b"); //add or remove
// console.log(numbers);

// ***************************************************************************
// finding elements in an array primitive type

// const numbers = [1, 2, 3, 1, 1, 4];
// console.log(numbers.indexOf(1));
// console.log(numbers.indexOf(1, 0));

// console.log(numbers.includes(1));

// *******************************************************
// finding elements in an array in  refrence type
// const courses = [
//   { id: Math.random(), name: "a" },
//   { id: Math.random(), name: "b" },
// ];

// const found = courses.find(function (course) {
//   return course.name === "a";
// });
// console.log(found);
// //other method
// const course = courses.findIndex(function (course) {
//   return course.name === "a";
// });
// console.log(course);

// **********************************************
// Function arrow
const courses = [
  { id: Math.random(), name: "a" },
  { id: Math.random(), name: "b" },
];

const found = courses.find((course) => course.name === "a"); // if only one argument then return and curly braces is not needed
console.log(found);

// ************************************************
