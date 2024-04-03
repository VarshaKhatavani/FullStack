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
