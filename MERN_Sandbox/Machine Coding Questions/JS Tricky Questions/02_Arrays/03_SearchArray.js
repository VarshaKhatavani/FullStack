/**Q.1)What is the difference between find() and filter() method ?
Q.2)If there is no value to return, what will findIndex() return ?
Q.3) What is the difference between indexOf() and includes() method ?
Q.4) How will you search multiple values in an array ?
Q.5)What will be the output of this code ?
=> let arr=["One","Two","Three","Four","Five"];
   console.log(arr.lastIndexOf("Abcd"));  */

/**
 * indexOf()
 * lastIndexOf()
 * includes()
 * find()
 * findIndex()
 * filter()
 */

let arr = ["One", "Two", "One", "Three", "Four", "One", "Five"];

// indexOf() method
// If it matches, return index else -1
console.log(arr.indexOf("One", 3)); // 5
// Starts searching from index 3 ["Three", "Four", "One", "Five"]
// returns position 2 from subarray
// returns  5 from original array

console.log(arr.indexOf("Five")); // 6

// lastIndexOf() method
console.log(arr.lastIndexOf("One")); // 5

// includes() method
console.log(arr.includes("One", 3)); // true

// find method - returns first matched condition
let numArr = [2300, 7800, 4500, 6400, 1000];
const val = numArr.find((elem) => {
  return elem > 3000;
});
console.log(val); // 7800

// findIndex - return index of first match condition
const indexVal = numArr.findIndex((elem) => {
  return elem > 5000;
});

console.log(indexVal); // 1

// filter
const filterVal = numArr.filter((ele) => {
  return ele > 2000;
});
console.log(filterVal); // [ 2300, 7800, 4500, 6400 ]
