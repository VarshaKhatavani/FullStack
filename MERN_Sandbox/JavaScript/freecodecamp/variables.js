//var - hoisted 
// introduced before ES6

console.log(strawberry); // undefined 
var strawberry = '🍓'; 
console.log(strawberry);

// let and const 
// introduced in ES6

//let or const, it is also hoisted but it's allocated in the memory as uninitialized in the temporal dead zone.
// You cannot access variables in the temporal dead zone before you've declared them. 

//console.log(cherry); // ReferenceError - it will stop executing further

const cherry = '🍒';
console.log(cherry);

var tomato;
let potato;

console.log(tomato); // undefined
console.log(potato); // undefined

// const avocado ; // SyntaxError: Missing initializer in const declaration

const avocado = ''; 