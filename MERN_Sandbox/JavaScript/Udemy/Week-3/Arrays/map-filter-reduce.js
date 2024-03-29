const balance__values = [200, 450, -400, 3000, -650, -130, 70, 1300];

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
