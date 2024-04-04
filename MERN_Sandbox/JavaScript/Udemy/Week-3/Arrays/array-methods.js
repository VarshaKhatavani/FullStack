import { accounts } from './Bankist-data.js';

console.log(accounts);

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

// use of find
const firstWithdrawal = accounts[0].movements.find(mov => mov < 0);
console.log(firstWithdrawal);

// find record from object
const acc = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(acc); // {owner: 'Jessica Davis', movements: Array(8), interestRate: 1.5, pin: 2222, username: 'jd'}

// find record from object
const accInd = accounts.findIndex(acc => acc.owner === 'Jessica Davis');
console.log(accInd); // 1

//some
console.log(accounts[0].movements);
// [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(accounts[0].movements.some(mov => mov === -130)); // true

const anyDeposit = accounts[0].movements.some(mov => mov > 0);
console.log(anyDeposit); // true

// every
console.log(accounts[0].movements.every(mov => mov > 0));

console.log(accounts[3]);
//[430, 1000, 700, 50, 90]
console.log(accounts[3].movements.every(mov => mov > 0));

//seperate call back
const deposit = mov => mov > 0;
console.log(accounts[3].movements.some(deposit)); // true
console.log(accounts[3].movements.every(deposit)); // true
console.log(accounts[3].movements.filter(deposit)); // [430, 1000, 700, 50, 90]

//flat - deep till one level of an array
const flatArr = [1, [2, 3], 4, [5, [6, 7]], [8, 9], 10];
console.log(flatArr.flat()); // by default 1
/**
 * [ 1,2,3,4,5,[6,7],8, 9,10]
 */

const deepFlat = flatArr.flat(2);
console.log(deepFlat);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);

// using chaining
const accMovements = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, cur) => acc + cur, 0);
console.log(accMovements); // 17840

//flatMap
const accMov = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => acc + cur, 0);
console.log(accMov); // 17840

// Sorting Arrays
const owners = [
  'Bob',
  'Jonas',
  'Varsha',
  'Mac',
  'Sam',
  'Jasmine',
  'Meillany',
  'Martha',
];
console.log(owners.sort());
/**[
    "Bob",
    "Jasmine",
    "Jonas",
    "Mac",
    "Martha",
    "Meillany",
    "Sam",
    "Varsha"
] */

let acc1_Movements = accounts[0].movements;
console.log(acc1_Movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]

console.log(acc1_Movements.sort()); // [-130, -400, -650, 1300, 200, 3000, 450, 70]
// it will take it as alphabetically

//Ascending Order
acc1_Movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(acc1_Movements); // [-650, -400, -130, 70, 200, 450, 1300, 3000]
//or
acc1_Movements.sort((a, b) => a - b);
console.log(acc1_Movements); // [-650, -400, -130, 70, 200, 450, 1300, 3000]

//Descending Order
acc1_Movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(acc1_Movements); // [3000, 1300, 450, 200, 70, -130, -400, -650]
//or
acc1_Movements.sort((a, b) => b - a);
console.log(acc1_Movements); //[3000, 1300, 450, 200, 70, -130, -400, -650]

// create array using differnt ways
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9]);

let emptyArr = new Array(9);
console.log(emptyArr);

// fill - modifies orginial array
//emptyArr.fill(1);

// Can be implemented likewise splice
//first index: value
//second index: start from 1
//third index: till 2 (3-1)

//while map creates new array that's why implemented like this
emptyArr.fill(0);
emptyArr = emptyArr.map((_, i) => i + 1);
console.log(emptyArr);
emptyArr.fill(22, 1, 3);
console.log(emptyArr);

//Array.from()
const y = Array.from({ length: 5 }, () => 1);
console.log(y);

let n = Array.from({ length: 10 }, (curr, i) => i);
console.log(n);
n = Array.from({ length: 10 }, (curr, i) => i + 5);
console.log(n);

//Small Program
const convertTitleCase = function (str) {
  const exceptions = [
    'is',
    'the',
    'a',
    'an',
    'of',
    'with',
    'on',
    'or',
    'in',
    'out',
    'and',
  ];
  const capitalize = st => st[0].toUpperCase() + st.slice(1);
  const titleCase = str
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase); // for first letter added result in a function
};

console.log(convertTitleCase('garden looks vibrant.'));
console.log(convertTitleCase('yoga and painting is my hobby.'));
console.log(convertTitleCase('the taj mahal is very pretty!'));
