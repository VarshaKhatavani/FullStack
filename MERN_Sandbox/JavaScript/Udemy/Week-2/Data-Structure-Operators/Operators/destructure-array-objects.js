'use strict';

import { restaurant } from './main.js';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

/** categories: [
        'Italian', 
        'Pizzeria', 
        'Vegetarian', 
        'Organic'
      ],
*/

// *************** Destructuring array *********************

console.log('**************** Destructuring array object called *************');
console.log(restaurant);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c); // 2 3 4

// destruture
const [x, y, z] = arr;
console.log(x, y, z); // 2 3 4

const [first, second] = restaurant.categories;
console.log(first, second); // Italian Pizzeria

// Skip second element while destructuring
const [one, , three] = restaurant.categories;
console.log(one, three); // Italian Vegetarian

// Switch elements using destructuring
let [main, , secondary] = restaurant.categories;
[main, secondary] = [secondary, main];
console.log(main, secondary); // Vegetarian Italian

// function
console.log(restaurant.order(2, 0));
// (2) ['Garlic Bread', 'Pizza']

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread Pizza

// Nested Destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

// default values
const [p, q = 1, r = 1] = [8];
console.log(p, q, r);

// *************** Destructuring Objects *********************

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
/**
Classico Italiano,
{
    "thu": {
        "open": 12,
        "close": 22
    },
    "fri": {
        "open": 11,
        "close": 23
    },
    "sat": {
        "open": 0,
        "close": 24
    }
},
[
    "Italian",
    "Pizzeria",
    "Vegetarian",
    "Organic"
]
 */

// Rename property while destructuring

const {
  name: restaurantName,
  openingHours: workingHours,
  categories: tags,
} = restaurant;
console.log(restaurantName, workingHours, tags);

// Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// set default value
// menu is not present in restaurant object so assigned as empty array[]
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// [] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Mutating variables

let a1 = 11;
let b1 = 22;
const obj = { a1: 1, b1: 2, c1: 3 };
console.log(obj); // {a1: 1, b1: 2, c1: 3}

({ a1, b1 } = obj);
console.log(a1, b1); // 1 2

//Nested Objects

/**
 * openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
 */

// get opening hours of friday
console.log(openingHours?.fri?.open); // 11
// or
const {
  fri: { open, close },
} = openingHours;
console.log(open, close); //11 23

const {
  fri: { open: o, close: cl },
} = openingHours;
console.log(o, cl); // 11 23

// Object in a function as parameter
restaurant.orderDelivery({
  // time: '19:30', // passed as default
  address: 'Navsari, 27',
  mainIndex: 2,
  starterIndex: 2,
});
