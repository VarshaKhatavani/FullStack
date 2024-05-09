// *** Variables Declared in Global Scope ***

var globalVariable = "I'm in global scope";

function myFunction() {
  // This function can access globalVariable
  console.log(globalVariable);
}

myFunction();

// *** Local Scope ****

function myLocalFunction() {
  var localVariable = "I'm in local scope";
  console.log(localVariable); // Accessing the local variable
}
myLocalFunction();

// *** The Concept of Variable Shadowing  ***

// Variable shadowing occurs when you declare a variable with the same name inside a local scope, effectively "hiding" the variable

var message = "Global message";

function showMessage() {
  var message = "Local message"; // This "shadows" the global variable
  console.log(message); // Accessing the local variable
}

showMessage();
console.log(message); // Accessing the global variable

// Benefits of Using Local Scope

// 1. Isolation
// 2. Modularity
// 3. Reusability

// *** Block Scope  **

// Variables declared in block scope are confined to that block, offering a high degree of isolation.

{
  let blockVariable = "I'm in block scope";
  console.log(blockVariable);
}
//console.log(blockVariable);
// Accessing blockVariable here would result in an error

// *** Scope Chain ***

// When you reference a variable, JavaScript searches for it starting from the top sheet (the current local or block scope) and moves down through the sheets, looking in each scope until it finds the variable.

// This process of searching for variables through multiple scopes is known as the "scope chain."

var globalVariable = "I'm global";

function outerFunction() {
  var outerVariable = "I'm in outer scope";

  function innerFunction() {
    var innerVariable = "I'm in inner scope";
    console.log(innerVariable); // Access innerVariable
    console.log(outerVariable); // Access outerVariable
    console.log(globalVariable); // Access globalVariable
  }

  innerFunction();
}
outerFunction();
//I'm in inner scope
//I'm in outer scope
//I'm global

// **** Lexical Scope ****

// Lexical scoping means that the scope of a function is determined by where the function is declared, not where it's called.
console.log("------------------");

var a = "I'm global";

function firstFunction() {
  var a = "I'm in firstFunction";

  function secondFunction() {
    console.log(a);
  }

  secondFunction();
}
firstFunction();

//**** Nested Scopes and Their Impact on the Scope Chain ****/

var x = 10;
function outer() {
  var x = 20;

  function inner() {
    var x = 30;
    console.log(x); // Accesses x from the innermost scope (x = 30)
  }
  inner();
  console.log(x); // Accesses x from the outer scope (x = 20)
}
console.log(x); // Accesses x from the global scope (x = 10)

console.log("...................................");
// ***  Closures and Function Scope ****

function outerFunctionClosure() {
  let outerVariable = "I'm in outerFunction";

  return function innerFunction() {
    console.log(outerVariable);
  };
}
var closure = outerFunctionClosure();
closure();

console.log("...................................");

// ** Practical Examples of Closures **
// 1. Data Encapsulation
function createCounter() {
  var count = 0;
  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
}
const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // Accesses the count variable via closures

// 2. Event Handlers
function setupEvent() {
  var message = "Hello, world!";
  document.getElementById("myButton").addEventListener("click", function () {
    alert(message);
  });
}
//setupEvent();
console.log("...................................");

// 3. Module Pattern
var module = (function () {
  var privateVariable = "I'm private";

  return {
    publicFunction: function () {
      console.log(privateVariable);
    },
  };
})();
module.publicFunction();
