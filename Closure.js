// To understand closures, first we need to know:
// 1. Lexical Environment
// 2. Scope

// When JavaScript runs, it creates a global execution context. 
// Every function creates its own execution context when called.

function outer() {
    let a = 10;

    return function inner() {
        console.log(a);
    }
}

const outerCall = outer();

// At this point, the `outer` function has finished executing.
// Normally, its local variables (like `a`) would be removed from memory.

// BUT here's the magic of closure:
outerCall(); // prints 10

// How is `a` still accessible? 
// The returned `inner` function is "closed over" its **lexical environment**.
// A lexical environment = the local variables of the function + variables from parent scopes.
// Because `inner` still references `a`, JS keeps `a` in memory.
// This is why closures can hold memory even after the outer function has finished.
