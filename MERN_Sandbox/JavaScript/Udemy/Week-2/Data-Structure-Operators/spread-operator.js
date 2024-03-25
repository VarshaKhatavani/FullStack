import { restaurant } from './main.js';

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr); //  [1, 2, 7, 8, 9]
console.log(...newArr); // 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Garlic Bread'];
console.log(newMenu);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

/******  Iterables : arrays, strings, maps, sets   { Not objects } ********/

const str = 'Varsha';
const letters = [...str, '', 'S.'];
console.log(letters); //  ['V', 'a', 'r', 's', 'h', 'a', '', 'S.']
console.log(...str); // V a r s h a

// Note: We can not use spread operator in template literals

// console.log(`${...str}`); not working

const ingredients = [
  //prompt("Let's make pasta! Ingredients 1?"),
  //prompt('Ingredients 2?'),
  //prompt('ingredients 3?'),
];
console.log(ingredients); //['Mayonise', 'Pizza Suace', 'Oregano']

//restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Here is your delicious pasta with Mayonise, Pizza Suace, Oregano

// Update Object
const newRestaurant = {
  foundedIn: 1993,
  ...restaurant,
  founder: 'Vikas Khanna',
};
console.log(newRestaurant);

// copy object
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
