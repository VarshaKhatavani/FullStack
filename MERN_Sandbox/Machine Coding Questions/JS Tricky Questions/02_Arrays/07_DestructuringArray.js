/**
Q.1) What is the destructuring assignment ?
Ans : 
"It's JavaScript expression that makes it possible to unpack values
from arrays, properties from objects"

Q.2) Swap values using destructuring.
Ans : 
let p = 10;
let q = 20;
[p, q] = [q, p];
console.log("p...", p, "q...", q); // p... 20 q... 10

Q.3) What will be the output of this code ?
        => let [a,b,c] = [5,,7];
             console.log(a,b,c); // 5, undefined , 7

Q.4) How will you set a default value while destructuring an array ? 
Ans : 

let defaultArr = [5];
let [i, j = 0] = defaultArr;
console.log(i, j); // 5 0

*/
// Code 1
let arr = [80, 90, 93, 26];
let [a, b, c, d] = arr;
console.log("a..", a); // a..80
console.log("b..", b); // b.. 90
console.log("c..", c); // c.. 93
console.log("d..", d); // d.. 26

// Code 2
function test() {
  return [10, 20, 30, 40];
}
let [a1, b1, c1, d1] = test();
console.log(a1, b1, c1, d1); // 10 20 30 40

// Code 3
let ary = [80, 90, 60, 50];
let [x, , y, z] = ary;
console.log(x, y, z); // 80 60 50

// Code 4 : swap nos using destructuring
let p = 10;
let q = 20;
[p, q] = [q, p];
console.log("p...", p, "q...", q); // p... 20 q... 10

// Code 5
let [m, ...n] = ary;
console.log("m...", m, "n...", n); // m... 80 n... [ 90, 60, 50 ]

// Code 6
let defaultArr = [5];
let [i, j = 0] = defaultArr;
console.log(i, j); // 5 0

// Code 6
const user = {
  fullName: "Varsha Khatavani",
  age: "30",
  job: "Software Development Engineer II",
};

// Old way:
const userFullName = user.fullName;
const useAge = user.age;
const userJob = user.job;
console.log(user.fullName, user.age, user.job);
// 'Varsha Khatavani' 30 'Software Development Engineer II'

// Destructuring way:
const { fullName, age, job } = user;
console.log(fullName, age, job); // 'Varsha Khatavani' 30 'Software Development Engineer II'

// Old way
function login(username, email, password, age, job) {
  console.log(email, password);
}
// New way
function login({ email: e, password: pw }) {
  console.log(e, pw);
}

// Destructurig inside loop
const simpsons = [
  { name: "Homer", age: 36 },
  { name: "Marge", age: 34 },
  { name: "Bart" },
  { name: "Lisa", age: 7 },
  { name: "Maggie" },
];

for (let { name, age = 0 } of simpsons) {
  console.log(name, age);
}

// Nested Object Destructuring
const weatherData = {
  city: "London",
  temperatureCelsius: {
    minimum: 10,
    expected: 30,
    current: 25,
  },
  temperatureFahrenheit: {
    minimum: 50,
    expected: 86,
    current: 77,
  },
};

const {
  temperatureCelsius: { current: currentC },
  temperatureFahrenheit: { current: currentF },
} = weatherData;
console.log(currentC); // 25
console.log(currentF); //  77

// Destructure a console.log

const { log, warn, error } = console;
log("Hello");
warn("I'm warning");
error("I'm error");
