//Set
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);
console.log(orderSet); //{'Pasta', 'Pizza', 'Risotto'}

//Check value exist in set
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));

// Add element in a set
orderSet.add('Garlic Bread');
console.log(orderSet); //{'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}

//Delete element from set
orderSet.delete('Pizza');
console.log(orderSet); //{'Pasta', 'Risotto', 'Garlic Bread'}

//orderSet.clear();
//console.log(orderSet); //{size: 0}

for (const order of orderSet) {
  console.log(order); // Pasta Risotto Garlic Bread
}

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff); // ['Waiter', 'Chef', 'Manager']

console.log(new Set(staff).size); // 3

//Map
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Junoon, Germany');
console.log(rest);

// chaining of set
rest
  .set('categories', ['Italian', 'Chinese', 'South Indian', 'Vegeterian'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are close :(');

console.log(rest);
console.log(rest.get('name'));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// We are close :(

//Map methods
console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);

const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest);
console.log(rest.size); // 8
console.log(rest.get(arr)); // test

const openingHours = {
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
};

//convert object to map
console.log(Object.entries(openingHours));
/**
 * [ ["thu",{"open": 12, "close": 22}],
     ["fri",{"open": 11, "close": 23}],
     ["sat",{"open": 0, "close": 24}] 
   ]
 */

// convert object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
/**
    { "thu" => { "open": 12,"close": 22}},
    { "fri" => { "open": 11, "close": 23}},
    { "sat" => {"open": 0,"close": 24}}
 */

const question = new Map([
  ['Que', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  [4, 'CPP'],
  ['Correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);
console.log(question);
/**
 * 0: {"Que" => "What is the best programming language in the world?"}
   1: {1 => "C"}
   2: {2 => "Java"}
   3: {3 => "JavaScript"}
   4: {4 => "CPP"}
   5: {"Correct" => 3}
   6: {true => "Correct!"}
   7: {false => "Try again!"} */

//Quiz App
console.log(question.get('Que'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}

//const answer = Number(prompt('Your Answer'));
//console.log(answer);

// question.get('Correct') === answer : true
//console.log(question.get(question.get('Correct') === answer));

// convert map to array
console.log([...question]);

/**
 * [ [ "Que", "What is the best programming language in the world?"],
     [ 1,"C"],
     [ 2,"Java"],
     [ 3,"JavaScript"],
     [ 4, "CPP" ],
     [ "Correct",3],
     [ true,"Correct!"],
     [ false,"Try again!"]
    ]
 */
console.log(question.entries());
console.log(question.keys());
console.log(question.values());
