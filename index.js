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
// const courses = [
//   { id: Math.random(), name: "a" },
//   { id: Math.random(), name: "b" },
// ];

// const found = courses.find((course) => course.name === "a"); // if only one argument then return and curly braces is not needed
// console.log(found);

// // ************************************************
// // Removing elements from an array
// const numbers = [1, 2, 3, 4];

// const last = numbers.pop(); // remove last element in an array
// console.log(numbers);

// const first = numbers.shift();
// console.log(first);

// const middle = numbers.splice(2, 2);
// console.log(numbers);

// *********************************
// emptying all elements of an array
// let numbers = [1, 2, 3, 4]; //this will not be removed since another is pointing to it
// let another = numbers; //
// solution-1
// numbers = [];//recommended

// solution-2
// numbers.splice(0, numbers.length);

// solution-3
// numbers.length = 0; //recommended

// console.log(another);

// ************************************
// combine 2 arrays or slice an array into 2 parts
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second); //combine this 2 array into one
// console.log(combined);

// const sliced = combined.slice(2);
// console.log(sliced);

// *********************************************
//Spread Operator to achieve the same result of combining 2 arrays
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = [...first, ...second]; //same result as const combined = first.concat(second)
// const copy = [...combined]; // same const sliced = combined.slice(2);

//************************************* */
// Iterating an Array
// const numbers = [1, 2, 3];

// for (let number of numbers) console.log(number);
// numbers.forEach((number, index) => console.log(index, number));

// *************************************************
//Joining an array especially usefull in urls
// const number = [1, 2, 3];
// const joined = number.join(",");
// console.log(joined);

// const message = "This is my first msg";
// const parts = message.split(" ");
// console.log(parts);

// const combined = parts.join("-");
// console.log(combined);

// ***************************
//sorting arrays
// const numbers = [2, 3, 1];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// const courses = [
//   { id: 1, name: "node" },
//   { id: 2, name: "Js" },
// ];

// courses.sort(function (a, b) {
//   //a<b =>-1
//   //a>b=1
//   //a===b=>0
//   const nameA = a.name.toUpperCase();
//   const nameB = b.name.toUpperCase();
//   if (nameA < nameB) return -1;
//   if (nameA > nameB) return 1;
//   return 0;
// });
// console.log(courses);

// // ***********************************************
// // Testing elements of an array
// const numbers = [1, 2, 3, -4];

// const allPositive = numbers.every(function (value) {
//   return value >= 0; // checking whether all positive number in array
// });

// const atleastOnePositive = numbers.some(function (value) {
//   return value >= 0; // checking whether atleast one positive number in array check
// });
// console.log(allPositive);
// console.log(atleastOnePositive);

// *********************************
// filtering an array
// const numbers = [1, -1, 2, 3];
// const filterd = numbers.filter((value) => value >= 0);
// console.log(filterd);

// ***************************
//maping an array
// const numbers = [1, 2, 3, 4];
// // const filtered = numbers.filter((n) => (n) => 0);
// // const items = filtered.map((n) => "<li>" + n + "</li>");

// // const html = "<ul>" + items.join("") + "</ul>";
// // console.log(html);
// numbers
//   .filter((n) => (n) => 0)
//   .map((n) => ({
//     value: n,
//   }));
// // const items = filtered.map(
// //   (n) => ({
// //     value: n,
// //   })
// //   const obj = { value: n };
// //   return obj;
// // );

// console.log(items);

//Reducing an array

const numbers = [1, -1, 3, 4]; //calculate sum of numbers

let sum = 0;
for (let n of numbers) sum += n;
console.log(sum);

//Same but other method
const sums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sums);

//same again
const sum2 = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum2);
