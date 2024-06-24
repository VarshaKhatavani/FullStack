/**
Q.1) What will be the output in case an array has “undefined” while sorting the values ?
Ans : sort() method shifts all the "undefined" values to the end and sort
      rest of the values.

Q.2) How will sort an object literal ? 
Ans : 

const employees = [
  { empNo: 101, salary: 133000 },
  { empNo: 102, salary: 58000 },
  { empNo: 103, salary: 33500 },
  { empNo: 104, salary: 25000 },
  { empNo: 105, salary: 19000 },
  { empNo: 106, salary: 18000 },
];
employees.sort(function (a, b) {
  if (a.salary > b.salary) {
    return 1;
  }
  if (a.salary < b.salary) {
    return -1;
  }
  if (a.salary === b.salary) {
    return 0;
  }
});
console.log(employees);

Q.3) How will you sort a numeric array ? 
Ans : 

let price = [55, 89, 78, 25, 90];
console.log(
  price.sort(function (a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    if (a == b) return 0;
  })
);
// [ 25, 55, 78, 89, 90 ]

Q.4) Sort all values of array in descending order. 
Ans : 
let price = [55, 89, 78, 25, 90];
console.log(
  price.sort(function (a, b) {
    if (a < b) return 1;
    if (a > b) return -1;
    if (a == b) return 0;
  })
);


*/
// Code 1
let products = ["Banana", "Orange", "Apple", "Cherry", "Pinapple"];
let sArr = products.sort();
console.log(sArr);
console.log(products); // [ 'Apple', 'Banana', 'Cherry', 'Orange', 'Pinapple' ]
// Sort() method mutates the original array

// Code 2
let fruits = ["Banana", "Orange", "Apple", undefined, "Cherry", "Pinapple"];
fruits.sort(function (a, b) {
  console.log(a, b);
});
console.log(fruits);
// sort method shifts undefined

// Code 3
let prd = ["Banana", "Orange", "Grapes", "Apple"];
prd.sort(function (a, b) {
  if (a < b) return 1;
  if (a > b) return -1;
  if (a == b) return 0;
});
console.log(prd);

/**
 * return 1 means the first element (a) is greater and should come after the second element (b).
   return -1 means the first element (a) is lesser and should come before the second element (b).
   return 0 means the elements are equal in terms of order.
 */

// Code 4 : descending
let price = [55, 89, 78, 25, 90];
console.log(
  price.sort(function (a, b) {
    if (a < b) return 1;
    if (a > b) return -1;
    if (a == b) return 0;
  })
);
// [90, 89, 78, 55, 25];  Based on return 1 / -1

// Ascending
let priceAsc = [55, 89, 78, 25, 90];
console.log(
  priceAsc.sort(function (a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    if (a == b) return 0;
  })
);
// [ 25, 55, 78, 89, 90 ]

// Code 5 : Sort Object Literal
const employees = [
  { empNo: 101, salary: 133000 },
  { empNo: 102, salary: 58000 },
  { empNo: 103, salary: 33500 },
  { empNo: 104, salary: 25000 },
  { empNo: 105, salary: 19000 },
  { empNo: 106, salary: 18000 },
];
employees.sort(function (a, b) {
  if (a.salary > b.salary) {
    return 1;
  }
  if (a.salary < b.salary) {
    return -1;
  }
  if (a.salary === b.salary) {
    return 0;
  }
});
console.log(employees);
