/**
Q.1) Find length of each element in a new array.
Ans:

let array = ["Apple", "Banana", "Grapes", "Orange"];
let lArr = array.map((ele) => ele.length);
console.log(lArr); // [ 5, 6, 6, 6 ]

Q.2) Find the square root of every element and store it in new array.
Ans:

let arr = [2, 3, 7, 8, 9];
let nArr = arr.map((ele) => {
  return ele * ele;
});
console.log(nArr); // [ 4, 9, 49, 64, 81 ]

Q.3) There is an array called products as shown here
         => let products=[
    	{pCode:1,pName:"Apple"},
    	{pCode:2,pName:"Banana"},
    	{pCode:3,pName:"Grapes"},
    	{pCode:4,pName:"Oranges"}
              ]
Get all product names (i.e pNames) in a new array.

Ans : 

let prdNames = products.map((obj) => {
  return obj.pName;
});
console.log(prdNames); // [ 'Apple', 'Banana', 'Grapes', 'Oranges' ]

 */

// Code 1
let arr = [2, 3, 7, 8, 9];
arr.map(function (ele, index) {
  console.log(ele);
}); // 2 3 7 8 9

// Code 2
let nArr = arr.map((ele) => {
  return ele * ele;
});
console.log(nArr); // [ 4, 9, 49, 64, 81 ]

// Code 3
let array = ["Apple", "Banana", "Grapes", "Orange"];
let lArr = array.map((ele) => ele.length);
console.log(lArr); // [ 5, 6, 6, 6 ]

//Code 4
let numArr = [9, 49, 81, 64];
let sqrtArr = numArr.map((ele) => {
  return Math.sqrt(ele);
});
console.log(sqrtArr); // [ 3, 7, 9, 8 ]

// Code 5
let products = [
  { pCode: 1, pName: "Apple" },
  { pCode: 2, pName: "Banana" },
  { pCode: 3, pName: "Grapes" },
  { pCode: 4, pName: "Oranges" },
];

let prdNames = products.map((obj) => {
  return obj.pName;
});
console.log(prdNames); // [ 'Apple', 'Banana', 'Grapes', 'Oranges' ]
