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

//Arrays
const users = [
  {
    name: 'Varsha',
    email: 'hello@gmail.com',
  },
];

console.log(users[0]?.name ?? 'User array empty');

// get keys from object
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days :`;
console.log(openStr);

for (const day of properties) {
  openStr += `${day}, `;
}
openStr.slice(-1);
console.log(openStr);

// get value from object
const propertiesValue = Object.values(restaurant.openingHours);
console.log(propertiesValue);

// get value from object
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

//Destructure Entries
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we are open at ${open} and close at ${close}`);
}
