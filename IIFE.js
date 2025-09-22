
// IIFE (Immediately Invoked Function Expression)

/*An IIFE is a function in JavaScript that runs immediately after it is defined. Unlike regular functions that need to be called, an IIFE executes on the spot. This is especially useful for creating a private scope and avoiding pollution of the global namespace.


Why do we need IIFE?
- In JavaScript, variables declared in the global scope can conflict with variables from other scripts. IIFE helps to encapsulate variables inside a function, so they are not accessible globally.
- It allows running code immediately, which is useful for initialization tasks, like setting configuration or initializing a module.
- Before ES6 modules were introduced, IIFE was a common way to create modular code and protect internal variables.


Real-life scenarios:
- Suppose you are writing a small library or plugin. You want your variables and functions to stay private and not interfere with other code on the page. Wrapping everything in an IIFE achieves this.
- Initializing app settings like theme, language preferences, or feature toggles can be done immediately using IIFE.
- In older codebases, module patterns often rely on IIFE to simulate private and public scopes. */
// Basic Syntax
(function() {
    console.log("I run immediately!");
})();


/*
Part 1: (function(){ ... }) → This wraps the function in parentheses so that JavaScript treats it as a function expression, not a declaration.
        Without parentheses, function(){} by itself is a function declaration, which cannot run immediately because it has no name.

Part 2: () → These are function call parentheses. They immediately invoke the function that was just defined.
 */

// Arrow Function Syntax
(() => {
    console.log("I run immediately too!");
})();

// Example 1: Avoid polluting global scope
var a = 10; // global variable

(function() {
    var a = 20; // local to IIFE
    console.log(a); // 20
})();

console.log(a); // 10 (global unaffected)

// Example 2: Encapsulation and Initialization
(function() {
    const settings = { theme: "dark" };
    console.log("Settings initialized:", settings);
})();

// Example 3: Returning a value
const result = (function() {
    let x = 5;
    let y = 10;
    return x + y;
})();

console.log(result); // 15




// Real-life scenario:
// - Suppose you are building a website and want to initialize a theme immediately when the page loads. You want to set the colors, fonts, and other UI settings without leaving variables in the global scope. Using an IIFE, you can execute this setup code instantly and keep everything private:


(function() {
const themeSettings = {
color: "dark",
font: "Arial"
};
document.body.style.backgroundColor = themeSettings.color === "dark" ? "#c2bcbcff" : "#fff";
document.body.style.fontFamily = themeSettings.font;
})();


