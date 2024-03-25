// Note : rest opertaor is used left side of =

import { restaurant } from './main.js';

console.log('**************** rest operators called *************');

//SPREAD
const arr = [1, 2, ...[3, 4]];
console.log(arr);

//REST
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 [3, 4, 5]

//combine two array
const [Pizza, Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Pizza, Risotto, otherFood); // Pizza Pasta (5) ['Risotto', 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

//Note : REST element must be last element

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // {thu: {…}, fri: {…}}

//Functions

const add = function (...numbers) {
  console.log(numbers);
};

add(2, 5, 7);

const x = [1, 2, 3];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');

// mushrooms
// (3) ['onions', 'olives', 'spinach']
