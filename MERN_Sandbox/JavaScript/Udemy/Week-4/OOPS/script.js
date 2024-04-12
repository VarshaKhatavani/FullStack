'use strict';

//Constructor Function
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
