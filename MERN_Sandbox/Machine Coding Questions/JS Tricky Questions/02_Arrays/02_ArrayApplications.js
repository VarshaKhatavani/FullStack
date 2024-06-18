/**
Q.1) What is the difference between push() and unshift() method ?

Q.2) What is the difference between pop() and shift() ?

Q.3) How can you insert an element at a given position ?
Ans : arr.splice(1,0,"New Element")

Q.4) How can you remove  a specific element ?
Ans : arr.splice(1,2)

Q.5) What does splice() return ?
Ans : splice() returns deleted items. 

Q.6)  If there is not element removed then what will splice() method return ?

=> let arr=["One","Two","Three","Four","Five"];
     console.log(arr.splice(2,0,"New"));      

=> Ans : splice() method will return [] array

*/

// array.push() method returns the count of array

// Code 1 : push()
let arr = ["one", "two", "three", "four", "five"];
console.log(arr.push("six")); // 6
console.log(arr); // [ 'one', 'two', 'three', 'four', 'five', 'six' ]

// Code 2 : unshift()
console.log(arr.unshift("test")); // 7
console.log(arr);

/**[
  'test', 'one',
  'two',  'three',
  'four', 'five',
  'six'
] */

// Code 3 : pop()
console.log(arr.pop()); // six
console.log(arr); // [ 'test', 'one', 'two', 'three', 'four', 'five' ]

// Code 4 : shift()
console.log(arr.shift()); // test
console.log(arr); // [ 'one', 'two', 'three', 'four', 'five' ]

// Code 5 : splice() - mutate original array
// returns deleted items
console.log(arr.splice(2)); // remved from 2nd index [ 'three', 'four', 'five' ]
console.log(arr); // [ 'one', 'two' ]

// console.log(arr.splice(0)); // [ 'one', 'two' ]
// console.log(arr); // []

console.log(arr.splice(2, 0, "New", "Another")); // []
console.log(arr); // [ 'one', 'two', 'New', 'Another' ]

//splice('start index', 'element to remove', 'element to add' , 'element to add')
// 2 : start index
// 0 : element to remove
// "New" : to be add at 2nd positiom
// "Another" : to be add after New

// add New at last as start position is array length
console.log(arr.splice(arr.length, 0, "New")); // []
console.log(arr); // [ 'one', 'two', 'New', 'Another', 'New' ]

console.log(arr.splice(0, 0, "New"));
console.log(arr); // [ 'New', 'one', 'two', 'New', 'Another', 'New' ]
