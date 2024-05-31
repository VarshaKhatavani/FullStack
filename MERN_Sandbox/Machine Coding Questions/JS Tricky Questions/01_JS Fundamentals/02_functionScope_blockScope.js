// Q.1) What is hoisting in javascript ?
// Q.2) How does block scope work ?
// Q.3) What is the scope of a variable ?

// ****** code 1 ******
function a() {
  let x = 10;
}
function b() {
  console.log(x); // ReferenceError: x is not defined
}
a();
//b();

//****** code 2 ******
let x1 = 10;
function a1() {
  x1 = x1 + 5;
}
function b1() {
  console.log(x1); // 15
}
a1();
b1();

//****** code 3 ******
// console.log(y); // ReferenceError: y is not defined
var x;

//****** code 4 ******
console.log(x); // undefined
var x;

//****** code 5 ******
console.log(x2); // undefined : only declarations are appear at top
var x2 = 9;

// ****** code 6 ******
let x3 = 9;
{
  let x3 = 8;
  console.log(x3); // 8
}
console.log(x3); // 9

//****** code 7 ******
console.log(x4); // ReferenceError: Cannot access 'x4' before initialization
let x4;
