const balance__values = [200, 450, -400, 3000, -650, -130, 70, 1300];

//map
const movementsUSD = balance__values.map(function (bal) {
  return bal;
});
console.log(movementsUSD);

const movementsArrow = balance__values.map(bal => bal);
console.log(movementsArrow);

const movementDescription = balance__values.map(
  (bal, i, arr) =>
    `Movement ${i + 1}: You ${bal > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      bal
    )}`
);
console.log(movementDescription);

//filter
const deposits = balance__values.filter((cur, i) => cur > 0);
console.log(deposits); // [200, 450, 3000, 70, 1300]

//Count no of deposits
const countDeposits = balance__values.filter(cur => cur > 0).length;
console.log(countDeposits); // 5

// reduce
const totalBalance = balance__values
  .filter(cur => cur > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(totalBalance); // 5020

// advance use case of reduce
const numDeposits1000 = balance__values.reduce(
  (count, element) => (element > 1000 ? count + 1 : count),
  0
);
console.log(numDeposits1000); // 2

// initialize using object
const sums = balance__values.reduce(
  (mov, element) => {
    element > 0
      ? (mov.deposits += element)
      : (mov.withdraw += Math.abs(element));
    return mov;
  },
  { deposits: 0, withdraw: 0 }
);
console.log(sums); // {deposits: 5020, withdraw: 1180}
