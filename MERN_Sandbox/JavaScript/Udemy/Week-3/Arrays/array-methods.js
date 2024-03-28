let arr = ['a', 'b', 'c', 'd', 'e'];

//slice : does not mutate original array
console.log(arr.slice(2)); //  ['c', 'd', 'e'] : start from index 2
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d','e']
console.log(arr.slice(1, -2)); // ['b', 'c'] : start from index 1 & ignore last two

console.log(arr);

//create shallow copy of array
let arrayCopy = arr.slice();
console.log(arrayCopy);

// create shallow copy using spread operator
let array = [...arr];
console.log(array);

//splice : mutate the original array
console.log(arr.splice(2)); //  ['c', 'd', 'e'] : deleted element start from 2
console.log(arr); // ['a','b']

//reverse : mutate the original array
const arr1 = ['a', 'b', 'c', 'd'];
const arr2 = ['h', 'g', 'f', 'e'];

console.log(arr2.reverse());
console.log(arr2);

//concat
const letters = arr1.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

console.log([...arr1, ...arr2]); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

//join
console.log([...arr1, ...arr2].join('-')); // a-b-c-d-e-f-g-h

//at
const numArr = [10, 20, 30];
console.log(numArr.at(0));
console.log(numArr.at(-2)); // last element of array 20

// at also works on string
const string = 'varsha'.at(1);
console.log(string); // a
