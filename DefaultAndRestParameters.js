
// Default & Rest Parameters in JavaScript


// 1. Default Parameters
// Definition:
// Default parameters allow you to give a function parameter a default value
// if no argument is provided, or if 'undefined' is passed.

// Example 1: Default parameter
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet());        // Hello, Guest!
console.log(greet("Ashes")); // Hello, Ashes!

// Example 2: Default with expression
function calculateTax(price, tax = price * 0.05) {
    return price + tax;
}

console.log(calculateTax(100));     // 105
console.log(calculateTax(100, 20)); // 120





// ---
// 2. Rest Parameters
// Definition:
// Rest parameters allow a function to accept an indefinite number of arguments
// as an array.

// Example 1: Rest parameter
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(5, 10));      // 15

// Example 2: Mixing normal + rest parameters
function introduce(firstName, lastName, ...hobbies) {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Hobbies: ${hobbies.join(", ")}`);
}

introduce("Ashes", "Das", "Coding", "Music", "Football");
// Name: Ashes Das
// Hobbies: Coding, Music, Football



// Benefits:
// - Default parameters simplify handling of missing arguments.
// - Rest parameters make functions more flexible by accepting unlimited inputs.

// ---

// Real-life Use Cases:
// 1. Default Parameters → Setting default configs.
   function connectDB(host = "localhost", port = 3306) {
       console.log(`Connecting to ${host}:${port}`);
   }
   connectDB(); // Connecting to localhost:3306

// 2. Rest Parameters → Handling dynamic arguments in utilities.
   function logger(...messages) {
       messages.forEach(msg => console.log(`[LOG]: ${msg}`));
   }
   logger("Server started", "DB connected", "Listening on port 3000");

