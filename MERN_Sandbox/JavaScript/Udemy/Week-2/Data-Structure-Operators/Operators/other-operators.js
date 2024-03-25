// falsy values
// falsy values are : undefined, null, false, 0, NaN, and an empty string ("")

//truthy values
/**
 * 1. Non-empty Strings: "hello", "0", "true"
 * 2. Non-zero Numbers: (-1, -2, -3.14, 3, 6)
 * 3. Non-empty Arrays: [1, 2, 3] , ["apple", "banana", "orange"]
 * 4. Non-empty Objects:  { key: "value" }
 * 5. Functions: Any function object, even if it's an empty function
 * 6. True
 */

import { restaurant } from './main.js';

// Short Circuiting (||)

// || operator left to right (if left falsy ignores & print right value (whether it's falsy or truthy))
console.log('**************** other operators called *************');
console.log(2 || 'varsha'); // 2
console.log('' || 'Varsha'); // varsha
console.log(true || 0); // true

// If you want to get undefined instead of null in the output
console.log(undefined || null); // null
console.log(null || undefined); // undefined
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // hello :  first truthy value

console.log(undefined && null); // undefined

restaurant.numGuests = 0;
const guest = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest); // 10 bcz 0 is falsy value then OR will take other value

// this leads to wrong output as actual guests are 0
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

// Solution : Nullish Coalescing Operators (??) - line no 45

// short circuiting with AND (&&)

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// Nullish Coalescing Operator (Introduced in ES20 )

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 0
// consider Nullish values null and undefined

// Logical Assignment Operator (Introduced in ES21)
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Pizza',
  owner: 'Varsha',
};

rest1.numGuests ||= 10; // rest1.numGuests || 10;
rest2.numGuests ||= 10; // rest2.numGuests || 10;

console.log(rest1); // {name: 'Capri', numGuests: 10}
console.log(rest2); // {name: 'La Pizza', owner: 'Varsha', numGuests: 10}

rest1.numGuests = 0;

rest1.numGuests ??= 10; // rest1.numGuests || 10;
rest2.numGuests ??= 10; // rest2.numGuests || 10;

console.log(rest1); // {name: 'Capri', numGuests: 0}
console.log(rest2); // {name: 'La Pizza', owner: 'Varsha', numGuests: 10}

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1); // {name: 'Capri', numGuests: 0}
console.log(rest2); // {name: 'La Pizza', owner: '<ANONYMOUS>', numGuests: 10}

// Optional Chaining
