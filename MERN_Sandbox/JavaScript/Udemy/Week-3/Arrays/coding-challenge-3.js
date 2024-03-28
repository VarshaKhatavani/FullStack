///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, 
but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = ages => {
  let average = ages
    .map(age => {
      return age <= 2 ? 2 * age : 16 + age * 4;
    })
    .filter(age => age >= 18)
    .reduce(function (acc, curr, index, arr) {
      return acc + curr / arr.length;
    }, 0);
  return average; // 7.2857142857142865
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
