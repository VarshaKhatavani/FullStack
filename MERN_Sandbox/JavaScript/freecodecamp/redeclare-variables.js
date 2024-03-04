
// Global Scope

//variables declared with var in a block scope are affect the outside/global variable.
var pepper = "🌶️";

console.log(pepper); // 🌶️

// Block Scope
{
  console.log(pepper);  // 🌶️
  var pepper = "🥦";
  console.log(pepper); // 🥦
}
console.log(pepper); // 🥦

// variables declared with var in a function are in functional scope and don't affect the outside.

var onion = "🧅";

function redeclaration(){
    var onion = "🥙";
    console.log(onion); // 🥙
}

console.log(onion); // 🧅

// let & const 

let eggplant = "🍆";
//let eggplant = "🥔"; // SyntaxError : Identifier 'eggplant' has already been declared

// Global Scope
const carrot = "🥕";

// Block Scope
{
  //console.log(carrot); // ReferenceError: Cannot access 'carrot' before initialization
  const carrot = "🍒";
  console.log(carrot); // 🍒
}

console.log(carrot); // 🥕

// Redeclare Variables by Mixing Statements

const orange = "🍊";

//var orange = "🍊"; // SyntaxError

let pineapple = "🍍";

//Block
{
    //var pineapple = "🍍"; // can not redeclare block scope variable
}

// Functional Scope
function declarePineapple() {
  var pineapple = "🍏"; // This is okay
}





