/**
Q.1)What is the difference between find() and filter() method ?
Ans : 
find() returns only one value & stoped searching if it matches the condition
where as filter() returns the new array with matched condition values.

Q.2)If there is no value to return, what will findIndex() return ?
Ans : find() & findeIndex() returns the "undefined" if there is no matched condition.

Q.3) What is the difference between indexOf() and includes() method ?
Ans : indexOf() returns the index of matched condition
includes() returns the boolean values (true/false) of matched condition

Q.4) How will you search multiple values in an array ?
Ans : filter() is used to serach multiple values.

Q.5)What will be the output of this code ?
=> let arr=["One","Two","Three","Four","Five"];
   console.log(arr.lastIndexOf("Abcd"));  */

/**
 * indexOf() - returns very first element of index if found
 * lastIndexOf() -  returns last element of index if found
 * includes() - returns true/false
 * 
 => Uses callback function
 * find()
 * findIndex()
 * filter() - returns entire new array
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
