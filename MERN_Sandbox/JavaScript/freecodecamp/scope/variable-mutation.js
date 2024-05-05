// var, let mutation
// can assign new values to them.

var pepper = "🌶️";
let apple =  "🍏";

pepper = "🫑";
apple = "🍎";

console.log(pepper);
console.log(apple);

const strawberry = "🍓";
//strawberry = "🍉"; // TypeError

console.log(strawberry);

// You cannot mutate them via assignment but can mutate them via their methods and property assignment. 

// how to mutate const variable?
// using methods and property assignment

const fruits = ["🍎","🍐"] ;

const fruitsEmojiMap = {
    apple:"🍎",
    pear:"🍐"
};

fruits[2] = "🍒";
fruits.push("🍌");
console.log(fruits); // [ '🍎', '🍐', '🍒', '🍌' ]

fruitsEmojiMap.cherry =  "🍒";

console.log(fruitsEmojiMap); // { apple: '🍎', pear: '🍐', cherry: '🍒' }

// freeze the object so it's can be mutable
Object.freeze(fruitsEmojiMap);

// Attempting to change a property will not have any effect
fruitsEmojiMap.apple = "🍏";

// Attempting to add a new property will not work
fruitsEmojiMap.mango = "🥭";
console.log(fruitsEmojiMap);

// Attempting to delete a property will not work
delete fruitsEmojiMap.mango;

console.log(fruitsEmojiMap);


