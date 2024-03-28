const balance = [100, 150, 230, -500, 400, 670, 800, -520, -730, 980];

for (const rupee of balance) {
  if (rupee > 0) {
    console.log(`You deposited ${rupee}`);
  } else {
    console.log(`You withdrew ${Math.abs(rupee)}`);
  }
}

for (const [i, rupee] of balance.entries()) {
  if (rupee > 0) {
    console.log(`You deposited ${i + 1} : ${rupee}`);
  } else {
    console.log(`You withdrew ${i + 1} : ${Math.abs(rupee)}`);
  }
}

console.log(`*********** FOR EACH ************`);

balance.forEach(function (bal) {
  if (bal > 0) {
    console.log(`You deposited ${bal}`);
  } else {
    console.log(`You withdrew ${Math.abs(bal)}`);
  }
});

balance.forEach(function (current, i) {
  if (current > 0) {
    console.log(`You deposited ${i + 1} : ${current}`);
  } else {
    console.log(`You withdrew ${i + 1} : ${Math.abs(current)}`);
  }
});

// Map
const currency = new Map([
  ['USD', 'United Status Dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currency.forEach(function (value, key, map) {
  console.log(`${key} ${value}`);
});

console.log(currency);
// {'USD' => 'United Status Dollar', 'EUR' => 'Euro', 'GBP' => 'Pound sterling'}

// Set
const currencyUnique = new Set(['USD', 'EUR', 'GBP', 'USD']);
console.log(currencyUnique);
