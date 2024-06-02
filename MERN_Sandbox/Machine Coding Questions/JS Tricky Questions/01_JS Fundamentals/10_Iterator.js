/**
 * Q.1) What is the purpose of the iterator ?
 * Q.2) How do you create an iterator ?
 * Q.3) Explain a practical use of an iterator ?
 */

let arr = [1, 2, 3, 4];
for (let i of arr) console.log(i);

let array = [5, 6, 7, 8];
let itr = array[Symbol.iterator]();
console.log(itr); // {}
console.log(itr.next()); // { value: 5, done: false }
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next()); // { value: undefined, done: true }

// Code 3
let obj = {
  a: 10,
  b: 20,
  [Symbol.iterator]() {
    return {
      next: function () {
        if (obj.a < obj.b) {
          return {
            value: obj.a++,
            done: false,
          };
        } else {
          return { done: true };
        }
      },
    };
  },
};
for (let i of obj) {
  console.log(i);
}
