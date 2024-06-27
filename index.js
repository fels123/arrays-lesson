//ADDING ELEMENTS IN AN ARRAY

const numbers = [3, 4];

// add array to end
numbers.push(5, 6);
console.log(numbers);

// add array to beginning
numbers.unshift(7, 8);
console.log(numbers);

// add array to middle
numbers.splice(3, 0, "a", "b"); //add or remove
console.log(numbers);
