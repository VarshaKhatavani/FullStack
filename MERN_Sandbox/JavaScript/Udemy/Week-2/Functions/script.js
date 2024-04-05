'use strict';

const bookings = [];

//default parameters
const createBooking = (
  flightNum,
  numPassengers = 1,
  price = 100.0 * numPassengers
) => {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 4);
createBooking('LH123', 2, 99.99);
createBooking('LH123', undefined, 99.99); // {flightNum: 'LH123', numPassengers: 1, price: 99.99}

//pass by value vs. pass by reference
const flight = 'LH1234';
const user = {
  name: 'Varsha Khatavani',
  passport: 751236749845,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Miss ' + passenger.name;

  if (passenger.passport === 751236749845) {
    console.log('Checked In');
  } else {
    console.log('Wrong Passport!');
  }
};

checkIn(flight, user);
console.log(flight); // LH1234
//object gets updated althogh it's updated in function
console.log(user); // {name: 'Miss Varsha Khatavani', passport: 751236749845}

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(user);
console.log(user);

//First Class Functions
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

const counter = {
  value: 26,
  increment() {
    return ++this.value;
  },
};
console.log(counter.increment());

//Higher Order Functions
// 1. Function that receives another function
// 2. Function that returns another function

//1. Function receives another function
const oneWord = function (str) {
  return str.replace(/ /g, ' ').toLowerCase(); // hello world!
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

console.log(oneWord('HELLO WORld!')); // hello world!
console.log(upperFirstWord('my name is varsha')); // MY name is varsha

const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed By: ${fn.name}`);
};

// Higher Order Function :: Passing function
transformer('JavaScript is the best', upperFirstWord);

/**
Original String: JavaScript is the best
Transformed String: JAVASCRIPT is the best
Transformed By: upperFirstWord
 */

//2. Function return another function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet('Hey');
console.log(greetHey); /**ƒ (name) {
    console.log(`${greeting} ${name}`);
  } */
console.log(greetHey('Varsha')); // Hey Varsha

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
const greetHi = greetArr('Hi');
greetHi('Child');
//or
greetArr('Hi')('Child');

//call, apply and bind
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

// Varsha booked a seat on Lufthansa flight LH 100
lufthansa.book(100, 'Varsha');
// Julie Khatavani booked a seat on Lufthansa flight LH 100
lufthansa.book(101, 'Julie Khatavani');
console.log(lufthansa);
/**{
    "airline": "Lufthansa",
    "iataCode": "LH",
    "bookings": [
        {
            "flight": "LH 100",
            "name": "Varsha"
        },
        {
            "flight": "LH 101",
            "name": "Julie Khatavani"
        }
    ]
} */

// *************** Call ****************
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
//does not work
//book(16, 'Jack Davis'); // Uncaught TypeError: Cannot read properties of undefined (reading 'airline')
book.call(eurowings, 16, 'Jack Davis');
console.log(eurowings);
/**
 * {
    "airline": "Eurowings",
    "iataCode": "EW",
    "bookings": [
        {
            "flight": "EW 16",
            "name": "Jack Davis"
        }
    ]
}
 */

// the call() method is used to invoke a function
// and allows you to specify the value of this explicitly.

// *************** Apply ****************
// apply() accepts array as parameter
const flightData = [580, 'Merry Gonsalvis'];
book.apply(eurowings, flightData);
console.log(eurowings);
/**
 * {
    "airline": "Eurowings",
    "iataCode": "EW",
    "bookings": [
        {
            "flight": "EW 16",
            "name": "Jack Davis"
        },
        {
            "flight": "EW 580",
            "name": "Merry Gonsalvis"
        }
    ]
}
 */

// *************** Bind ****************

// bind() method is used to create a new function
//with a specified this value and optionally some initial arguments.

const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

const users = {
  firstName: 'Mike',
  lastName: 'Roy',
};

// Bind the fullName function to the person object
const getFullName = person.fullName.bind(users);
console.log(users); // {firstName: 'Mike', lastName: 'Roy'}

// Call the bound function
console.log(getFullName()); // Output: Mike Roy
