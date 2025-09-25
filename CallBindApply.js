
const obj = {
    name: "Ashes",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}


obj.greet();

obj.greet.call({ name: "Akash" });  // we can use call to set this to a different object
obj.greet.apply({ name: "Aman" }); // we can use apply to set this to a different object


const boundGreet = obj.greet.bind({ name: "Ankit" }); // we can use bind to create a new fu nction with this set to a different object
boundGreet(); //its different from call and apply as it returns a new function , we need this because sometimes we want to pass a function as a callback and we want to set this to a specific object


//another use of bind is in event listeners where we want to set this to a specific object
const button = document.querySelector("button");
button.addEventListener("click", obj.greet.bind({name : "Raghab"})); // here we are binding this to obj so that when the button is clicked, it will log the name of obj


// apply and call are used when we want to invoke the function immediately whereas bind is used when we want to create a new function with a specific this value and invoke it later
// also apply takes an array of arguments whereas call takes arguments separately

obj.greet.apply({ name: "Aman" }, []); // no arguments here but if there were any we would pass them as an array
obj.greet.call({ name: "Akash" }, ); // no arguments here but if there were any we would pass them separately
// bind also takes arguments separately but they are passed when the new function is invoked

// example with arguments
const objWithArgs = {
    name: "Ashes",
    greet: function(greeting) {
        console.log(`${greeting}, my name is ${this.name}`);
    }
}

objWithArgs.greet.apply({ name: "Aman" }, ["Hello"]); // passing arguments as an array
objWithArgs.greet.call({ name: "Akash" }, "Hi"); // passing arguments separately



const boundGreetWithArgs = obj.greet.bind({ name: "Ankit" }, ); // no arguments here but if there were any we would pass them separately
boundGreetWithArgs(); // invoking the new function

// Summary:
// - call() and apply() invoke the function immediately with a specified this value.
// - bind() creates a new function with a specified this value, which can be invoked later.
// - call() takes arguments separately, apply() takes arguments as an array, and bind() takes arguments separately when creating the new function.  


