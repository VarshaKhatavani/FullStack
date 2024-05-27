// Q.1) What is "undefined" in JavaScript ?
// Q.2) What will be the output of undefined==null & undefined===null ? Why ?
// Q.3) Can you explicitly assign "undefined" to a variable ? (let i = undefined)

let x;
console.log(x); // undefined
console.log(typeof x); // undefined

let y = 9;
console.log(y); // 9
console.log(typeof y); // number

let z = null;
console.log(z); // null

console.log(x == z); // true
console.log(x === z); // false

let x1 = 10;
function a() {
  x1 = x1 + 5; // updated global variable x1
}
function b() {
  console.log("x1 : ", x1);
}
a(); // The function a() is called, updating x1 in the global scope to 15
b(); // The function b() is called, logging the value of x1, which is now 15
