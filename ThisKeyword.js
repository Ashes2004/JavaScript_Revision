
// `this` keyword in JavaScript

// Definition:
// `this` refers to the object that is currently executing the function.
// Its value depends on **how** (and where) the function is called, not where it is defined.



// 1. Global Context
// - In browsers, `this` refers to the `window` object.
// - In Node.js, it refers to an empty object `{}` in modules.

console.log(this); // Browser → window, Node.js → {}



// 2. Inside a Function (Non-Strict Mode)
function show() {
    console.log(this);
}

show(); // Browser → window, Node.js → global



// 3. Inside a Function (Strict Mode)
'use strict';
function showStrict() {
    console.log(this);
}

showStrict(); // undefined



// 4. Inside an Object Method
const person = {
    name: "Ashes",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet(); // Hello, my name is Ashes



// 5. Arrow Functions
// - Arrow functions don’t have their own `this`.
// - They inherit `this` from the surrounding lexical scope.

const person2 = {
    name: "Ashes",
    greet: () => {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person2.greet(); // Hello, my name is undefined (because `this` is inherited from global scope)



// 6. Inside a Class
class Student {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hi, I am ${this.name}`);
    }
}

const s1 = new Student("Ashes");
s1.greet(); // Hi, I am Ashes



// 7. In Event Listeners
const button = document.querySelector("button");
button.addEventListener("click", function() {
    console.log(this); // Refers to the button element
});

button.addEventListener("click", () => {
    console.log(this); // Refers to parent scope (not the button)
});



// 8. With call(), apply(), and bind()
function introduce(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
}

const user = { name: "Ashes" };

introduce.call(user, "Hello");  // Hello, my name is Ashes
introduce.apply(user, ["Hi"]);  // Hi, my name is Ashes
const boundFn = introduce.bind(user);
boundFn("Hey");                 // Hey, my name is Ashes



// Summary:
// - Global scope → window / global object
// - Function → depends on mode (non-strict: global, strict: undefined)
// - Method → the object that owns the method
// - Arrow function → inherits from parent scope
// - Class → the instance of the class
// - Event listener → depends on function type (normal vs arrow)
// - call/apply/bind → manually set `this`

