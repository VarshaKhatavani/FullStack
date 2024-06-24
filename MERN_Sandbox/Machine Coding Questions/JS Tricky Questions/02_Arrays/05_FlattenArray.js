/**
=> accumulator holds the accumulative values
  
let result = arr.reduce((accumulator, current, index, array)=>{
	return accumulator + current 
}, initial value / [])

 * const twoDimArray = [[1, 2], [3, 4, 5], [6, [7, 8]]];
 * const flattenedArray = twoDimArray.flat(Infinity);
 * console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
 */

/**
Q.1) How will you flatten an array 
	 i.e, converting 2 dimensional array into single dimension ?
Ans : 

let array = [
  [1, 3, 4],
  [5, 6],
  [8, [6, 7]],
];
console.log(array.flat(Infinity)); // [ 1, 3, 4, 5, 6, 8, 6, 7 ]

Q.2)  Get sum of a key field of an object literal
     => const employees=[
    	{eNo:1001,salary:3000},
    	{eNo:1002,salary:2200},
	   	{eNo:1003,salary:3400},
    	{eNo:1004,salary:6000} ]
        Then find total salary of employees.
Ans : 

const employees = [
  { empNo: 101, salary: 133000 },
  { empNo: 102, salary: 58000 },
  { empNo: 103, salary: 33500 },
];
let totalSalary = employees.reduce((accumulator, current) => {
  return accumulator + current.salary;
}, 0);
console.log(totalSalary); // [object Object]5800033500 : without initialization
// output : 224500

Q.3)  Find avg value of all elements of an array ? 
Ans :

let avgArr = [1, 5, 6, 7, 8, 9];
let avgResult = avgArr.reduce((accumulator, current, index, array) => {
  accumulator += current;
  if (index === array.length - 1) {
    return accumulator / array.length;
  }
  return accumulator;
});
console.log(avgResult); // 6


Q.4) Find the sum or product of all elements ?
Ans :

let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((accumulator, current) => {
  return accumulator + current;
});
console.log(result); // 15

Q.5) What is the difference between reduce() and reduceRight() ? 
Ans : reduce() loops from 0th index till the last index of an array
	  while reduceRight() starts loops from the last index to 0th index.

*/

//Code 1
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((accumulator, current) => {
  return accumulator + current;
});
console.log(result); // 15

// Code 2  :  Sum of all array elements
let resultArr = arr.reduce((accumulator, current) => {
  return accumulator + current;
}, 10);
console.log(resultArr); // 25

// Code 3 : Calculate Product of all arrays
let productArr = arr.reduce((accumulative, current) => {
  return accumulative * current;
});
console.log(productArr); // 120

// Code 4 :  flattern an array
let array = [
  [1, 3, 4],
  [5, 6],
  [8, [6, 7]],
];
console.log(array.flat(Infinity)); // [ 1, 3, 4, 5, 6, 8, 6, 7 ]

// Code 5  : Average of array
let avgArr = [1, 5, 6, 7, 8, 9];
let avgResult = avgArr.reduce((accumulator, current, index, array) => {
  accumulator += current;
  if (index === array.length - 1) {
    return accumulator / array.length;
  }
  return accumulator;
});
console.log(avgResult); // 6

// Code 6
let numArr = [
  [12, 80],
  [7, 9],
  [5, 6],
];
let fArr = numArr.reduce((accumulator, element, index, array) => {
  return accumulator.concat(element);
});
console.log(fArr); // [ 12, 80, 7, 9, 5, 6 ]

// Code 7
const employees = [
  { empNo: 101, salary: 133000 },
  { empNo: 102, salary: 58000 },
  { empNo: 103, salary: 33500 },
];
let totalSalary = employees.reduce((accumulator, current) => {
  return accumulator + current.salary;
}, 0);
console.log(totalSalary); // [object Object]5800033500 : without initialization
// output : 224500

// Note : if dealing with objects it's mandatory to initialize into reduce method
