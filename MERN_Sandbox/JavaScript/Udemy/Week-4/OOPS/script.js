'use strict';

// ************* Constructor Function ***************
const User = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never add function inside constructor function
  this.calAge = function () {
    return new Date().getFullYear() - this.birthYear;
  };
};

console.log(new User());

console.log(new User('Varsha', 1993));
// {
//     "firstName": "Varsha",
//     "birthYear": 1993
// }

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically rerurn ()

const matilda = new User('Matilda', 1990);
console.log(matilda);

console.log(matilda instanceof User); // true
console.log(User);

// func inside constructor fun
console.log('Age :', matilda.calAge()); // Age: 34

// Create constructor function
const Person = function (birthYear) {
  this.birthYear = birthYear;
};
console.log(new Person(1993)); // {}

const jovitha = new Person(1993);

// add function to prototype
Person.prototype.calculateAge = function () {
  console.log(new Date().getFullYear());
  console.log(new Date().getFullYear() - this.birthYear);
};
console.log(Person.prototype);

jovitha.calculateAge();
console.log(jovitha.__proto__);
console.log(jovitha.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(jovitha)); // true
console.log(User.prototype.isPrototypeOf(matilda)); // true

// set property to prototype
Person.prototype.species = 'Homo Sepiens';
console.log(jovitha);
console.log(matilda);

console.log(jovitha.hasOwnProperty('species')); // false as it's in person object

let fullname = {};
console.log(fullname);

console.log(jovitha.__proto__);
console.log(jovitha.__proto__.__proto__);

console.log(Person.prototype.constructor);

// ƒ (birthYear) {
//   this.birthYear = birthYear;
// }

// array inherit method from it's prototype
const arr = [2, 8, 9, 21, 4, 7, 8, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__);

/**
at()
concat()
copyWithin()
entries()
every()
fill()
filter()
find()
findIndex()
findLast()
findLastIndex()
flat()
flatMap()
forEach()
includes()
indexOf()
join()
keys()
lastIndexOf()
map()
pop()
push()
reduce()
reduceRight()
reverse()
shift()
slice()
some()
sort()
splice()
toLocaleString()
toReversed()
toSorted()
toSpliced()
toString()
unshift()
values()
 */

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(Array);
console.log(arr.unique()); //[2, 8, 9, 21, 4, 7]

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

// ****** ES6 Class Syntax **********

// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  sayHello() {
    console.log(`Hey ${this.firstName}`);
  }

  static Hey() {
    console.log('Hey there👋');
    console.log(this);
  }
}

const varsha = new PersonCl('varsha', 1993);
console.log(varsha);

varsha.calcAge(); // 31
console.log(varsha.__proto__ === PersonCl.prototype); // true

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

varsha.greet();
varsha.sayHello();
console.log(varsha.__proto__);

// *********** Static method ************
PersonCl.Hey();

// *********** Object.create ************
const personProto = {
  calAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(personProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 1997;
steven.calAge();

const harsh = Object.create(personProto);
harsh.init('harsh', 1991);
harsh.calAge();
console.log(harsh);
