
// Arrow Functions vs Regular Functions in JavaScript



// 1. Syntax
// - Regular Function:
function add(a, b) {
    return a + b;
}

// - Arrow Function:
const addArrow = (a, b) => a + b;



// 2. `this` Binding
// - Regular functions: `this` depends on how the function is called.
// - Arrow functions: `this` is lexically bound (inherited from parent scope).

const person = {
    name: "Ashes",
    regularFunc: function() {
        console.log(this.name); // refers to person
    },
    arrowFunc: () => {
        console.log(this.name); // refers to outer scope (not person)
    }
};

person.regularFunc(); // Ashes
person.arrowFunc();   // undefined (or global scope value)


// 3. Arguments Object
// - Regular functions have their own `arguments` object.
// - Arrow functions do NOT have their own `arguments`.

function regular() {
    console.log(arguments);
}
regular(1, 2, 3); // [1, 2, 3]

const arrow = () => {
    console.log(arguments);
};
arrow(1, 2, 3); // ReferenceError: arguments is not defined



// 4. Constructor Usage
// - Regular functions can be used as constructors with `new`.
// - Arrow functions cannot be used as constructors.

function Person(name) {
    this.name = name;
}
const p1 = new Person("Ashes"); // works

const PersonArrow = (name) => {
    this.name = name;
};
// const p2 = new PersonArrow("Akash"); // Error: PersonArrow is not a constructor


// 5. Methods in Objects
// - Arrow functions are not ideal for methods because they don’t bind `this`.
// - Regular functions are better for object methods.

const obj = {
    value: 42,
    regularMethod: function() {
        return this.value;
    },
    arrowMethod: () => this.value
};

console.log(obj.regularMethod()); // 42
console.log(obj.arrowMethod());   // undefined



// 6. Hoisting
// - Regular function declarations are hoisted.
// - Arrow functions (assigned to variables) are not hoisted.

sayHi(); // Works
function sayHi() {
    console.log("Hello");
}

// sayHello(); // Error: Cannot access 'sayHello' before initialization
const sayHello = () => console.log("Hi");



// Summary:
// - Use **Arrow functions** → for short functions, callbacks, and when you want lexical `this`.
// - Use **Regular functions** → for object methods, constructors, or when you need `arguments`.

