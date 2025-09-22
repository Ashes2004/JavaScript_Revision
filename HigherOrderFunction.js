/*
Higher-Order Functions (HOF) in JavaScript

Definition:
A Higher-Order Function is a function that can:
1. Accept one or more functions as arguments.
2. Return a function as a result.

Higher-order functions are a core concept in functional programming. They allow us to write flexible, reusable, and composable code.


*/


// Example 1: Function accepting another function as argument
function greet(name, formatter) {
    return "Hello, " + formatter(name);
}

function upperCaseName(name) {
    return name.toUpperCase();
}

console.log(greet("Alice", upperCaseName)); // Hello, ALICE


// Example 2: Function returning another function
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // 10


// Common HOFs in JavaScript Arrays
const numbers = [1, 2, 3, 4, 5];

// map - transforms each element
const squares = numbers.map(num => num * num);
console.log(squares); // [1,4,9,16,25]

// filter - filters elements based on condition
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2,4]

// reduce - reduces array to a single value
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15



// Why use HOF?
// - Promote code reusability and abstraction.
// - Helps in creating flexible APIs.
// - Essential for functional programming and working with arrays.



// Real-life example:
// - Event handling in JavaScript:
//   `button.addEventListener('click', handleClick);`  
//   Here, `addEventListener` is a higher-order function because it takes another function as an argument.

