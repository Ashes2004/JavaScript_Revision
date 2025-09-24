
// Function Currying in JavaScript

// Definition:
// Currying is a functional programming technique where a function with multiple arguments
// is transformed into a sequence of functions, each taking a single argument.



// Example: Normal function
function add(a, b, c) {
    return a + b + c;
}
console.log(add(1, 2, 3)); // 6

// Curried version
function curryAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(curryAdd(1)(2)(3)); // 6
const addFive = curryAdd(5);
const addFiveAndTwo = addFive(2);
const result = addFiveAndTwo(3);
console.log(result); // 10


// Benefits of Currying:
// 1. Reusability → We can create specialized versions of a function.
// 2. Partial Application → Provide some arguments now, and the rest later.
// 3. Readability & Composition → Makes functional programming easier.



// Real-life Example: Logging
function log(level) {
    return function(message) {
        console.log(`[${level}] ${message}`);
    };
}

const errorLog = log("ERROR");
const infoLog = log("INFO");

errorLog("Something went wrong!"); // [ERROR] Something went wrong!
infoLog("System running smoothly"); // [INFO] System running smoothly



// Another Real-life Example: API Endpoints
function apiRequest(baseURL) {
    return function(endpoint) {
        return function(id) {
            return `${baseURL}/${endpoint}/${id}`;
        };
    };
}

const githubAPI = apiRequest("https://api.github.com");
const userAPI = githubAPI("users");

console.log(userAPI("AshesDas"));
// https://api.github.com/users/AshesDas

