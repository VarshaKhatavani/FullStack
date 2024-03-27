import { restaurant } from './Operators/main.js';
console.log('************ array loops ***********');
console.log(restaurant);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(item);
}

// menu.entries()
// [0, 'Focaccia']
// [1, 'Bruschetta'] and so on...

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// destruring [i, el]
// 1: Focaccia
// 2: Bruschetta
// 3: Garlic Bread
// 4: Caprese Salad and so on...
