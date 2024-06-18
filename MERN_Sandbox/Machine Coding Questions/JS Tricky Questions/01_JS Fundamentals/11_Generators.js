/**
 * Q.1) What are generator functions? Explain the syntax.
 * Q.2) Which is the right syntax function* () { } or function *(){} ?
 * Q.3) Explain all methods of generator objects.
 * Q.4) Explain the use of “yield*”
 * Q.5) Can you prevent return() from terminating the generator ?
 */

/***
 * * A generator function is a special type of function that can be used to control
 * * the flow of execution by yielding values one at a time
 * * instead of returning them all at once.
 */

// * Helps you to pause and resume the code

/**
 * The generator object has a next() method that can be used to resume execution of the function,
 * and each time the function encounters a yield statement,
 * it returns the yielded value and suspends execution until the next() method is called.
 */

const genFunction = function* () {
  console.log("Hey");
  yield;
  console.log("Hi");
  yield;
  console.log("World");
};

const gObj = genFunction();
// console.log(gObj);
// gObj.next();
// gObj.next();
// gObj.next();

for (let o of gObj) {
  console.log(o);
}

// Code 2
const generFunction = function* () {
  yield "1", yield "2", yield "3";
};

const generObject = generFunction();
for (let o of generObject) {
  console.log(o); // 1 | 2 | 3
}

// * Code 3
// * Instaed of loop we can iterate using rest as well [ 46 to 49 line ]
const geneObject = [...generFunction()];
console.log(geneObject); // [ '1', '2', '3' ]

// Code 4
let genObj = {
  start: 10,
  end: 20,
  *[Symbol.iterator]() {
    for (let cnt = this.start; cnt <= this.end; cnt++) {
      yield cnt;
    }
  },
};

for (let i of genObj) {
  console.log(i); // 10 11 12 13 14 15 16 17 18 19 20
}

// Code 5
function* gen() {
  console.log("Hello, Generator Calling another Generator Function");
}

function* gen1() {
  const g = gen();
  g.next();
}

const g1 = gen1();
console.log(g1.next()); // Hello, Generator Calling another Generator Function

//Code 6
function* gene() {
  console.log("Generator Calling another using yield");
}

function* gene1() {
  yield* gene();
}

const gn = gene1();
console.log(gn.next()); // Generator Calling another geerator function using yield

// Code 7
function* geneFinally() {
  try {
    let a = yield "one";
    console.log(a);
    yield "two";
  } finally {
    console.log("....finally....");
  }
}

const g = geneFinally();
console.log(g.next("A")); // { value: 'one', done: false }
//console.log(g.next()); // { value: 'two', done: false }
//console.log(g.next()); // { value: undefined, done: true }

// Code 8 - stop execution  // * [use of return]

console.log(g.return()); // { value: undefined, done: true }
console.log(g.next()); // { value: undefined, done: true }

// Code 9 - use of throw
function* geneFunction() {
  try {
    yield "First";
    yield "Second";
  } catch (err) {
    console.log(err);
  }
}

const gFun = geneFunction();
console.log(gFun.next());
console.log(gFun.throw()); // { value: undefined, done: true }
