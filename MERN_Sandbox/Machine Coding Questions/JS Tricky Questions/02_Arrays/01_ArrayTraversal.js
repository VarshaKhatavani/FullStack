/**Q.1) What is the difference between for...in and for...of ?
Q.2) What will be the output of the below code ?
Q.3) What will be the output of below statements ? */

// Code 1
let arr = [1, 2, 3, 4, 5];
let arr1 = ["Hello", 16, true, 3.3];
console.log(arr);
console.log(arr1);
//access specific element
console.log(arr1[0]); // Hello
console.log(arr1.length); // 4
console.log(arr[arr.length - 1]); // 5

// Code 2
let arrProduct = [
  { pCode: 101, pName: "iPhone 15 plus" },
  { pCode: 102, pName: "SAMSUNG galaxy J8" },
  { pCode: 103, pName: "MAX" },
];
console.log(arrProduct);
console.log(arrProduct[0].pName); // iPhone 15 plus

// Code 3
let JSVersion = ["ES6", "ES7", "ES8", "ES9"];
for (let i = 0; i < JSVersion.length; i++) {
  console.log(JSVersion[i]);
}

// for in loop - represent index
for (let elem in JSVersion) {
  console.log(elem); // 0 1 2 3
}

// for of loop
for (let elem of JSVersion) {
  console.log(elem); // ES6 ES7 ES8 ES9
}
